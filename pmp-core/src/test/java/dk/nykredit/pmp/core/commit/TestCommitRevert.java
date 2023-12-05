package dk.nykredit.pmp.core.commit;

import dk.nykredit.pmp.core.database.setup.H2StartDatabase;
import dk.nykredit.pmp.core.service.ParameterService;
import org.jboss.weld.environment.se.Weld;
import org.jboss.weld.environment.se.WeldContainer;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestCommitRevert extends H2StartDatabase {
    private WeldContainer container;
    private CommitDirector commitDirector;

    @BeforeEach
    public void before() {
        Weld weld = new Weld();
        container = weld.initialize();
        commitDirector = container.select(CommitDirector.class).get();

        ParameterService parameterService = commitDirector.getParameterService();
        parameterService.persistParameter("test1", "data1");
        parameterService.persistParameter("test2", 5);
    }

    @AfterEach
    public void after() {
        container.shutdown();
    }

    @Test
    void testCommitRevertOnLatestCommit() {
        // This throws a bunch of exceptions to the console but the test seems to be working fine
        ParameterService parameterService = commitDirector.getParameterService();

        parameterService.getRepository().startTransaction();

        Commit commit = new Commit();
        commit.setUser("author");
        commit.setMessage("test commit");
        commit.setPushDate(LocalDateTime.now());

        List<Change> changes = new ArrayList<>();
        ParameterChange change = new ParameterChange();
        change.setName("test1");
        change.setNewValue("data2");
        change.setOldValue("data1");
        change.setType("String");
        changes.add(change);

        commit.setChanges(changes);

        commitDirector.apply(commit);

        CommitRevert commitRevert = new CommitRevert();
        commitRevert.setCommitHash(commit.getCommitHash());

        Commit commit2 = new Commit();
        commit2.setPushDate(LocalDateTime.now());
        commit2.setUser("test1");
        commit2.setMessage("revert commit 1");

        List<Change> changes2 = new ArrayList<>();
        changes2.add(commitRevert);

        commit2.setChanges(changes2);
        commitDirector.apply(commit2);

        parameterService.getRepository().endTransaction();

        assertEquals("data1", parameterService.findParameterByName("test1"));
        assertEquals(5, parameterService.<Integer>findParameterByName("test2"));
    }

    @Test
    void testDontRevertParametersWithNewerChanges() {
        // This throws a bunch of exceptions to the console but the test seems to be working fine
        ParameterService parameterService = commitDirector.getParameterService();

        parameterService.getRepository().startTransaction();

        Commit commit = new Commit();
        commit.setUser("author");
        commit.setMessage("test commit asd");
        commit.setPushDate(LocalDateTime.now());

        {
            List<Change> changes = new ArrayList<>();
            ParameterChange change = new ParameterChange();
            change.setName("test1");
            change.setNewValue("data2");
            change.setOldValue("data1");
            change.setType("String");
            changes.add(change);

            ParameterChange change2 = new ParameterChange();
            change2.setName("test2");
            change2.setNewValue("6");
            change2.setOldValue("5");
            change2.setType("Integer");
            changes.add(change2);

            commit.setChanges(changes);
        }

        commitDirector.apply(commit);


        Commit commit2 = new Commit();
        commit2.setUser("author");
        commit2.setMessage("test commit 2");
        commit2.setPushDate(LocalDateTime.now());

        {
            List<Change> changes = new ArrayList<>();
            ParameterChange change = new ParameterChange();
            change.setName("test1");
            change.setNewValue("data3");
            change.setOldValue("data2");
            change.setType("String");
            changes.add(change);

            commit2.setChanges(changes);
        }

        commitDirector.apply(commit2);

        CommitRevert commitRevert = new CommitRevert();
        commitRevert.setCommitHash(commit.getCommitHash());

        Commit revertCommit = new Commit();
        revertCommit.setPushDate(LocalDateTime.now());
        revertCommit.setUser("test1");
        revertCommit.setMessage("revert commit 1");

        List<Change> changes2 = new ArrayList<>();
        changes2.add(commitRevert);

        revertCommit.setChanges(changes2);
        commitDirector.apply(revertCommit);

        parameterService.getRepository().endTransaction();

        assertEquals("data3", parameterService.findParameterByName("test1"));
        assertEquals(5, parameterService.<Integer>findParameterByName("test2"));
    }
}