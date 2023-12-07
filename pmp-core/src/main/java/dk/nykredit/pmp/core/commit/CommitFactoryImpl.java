package dk.nykredit.pmp.core.commit;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

public class CommitFactoryImpl implements CommitFactory {

    @Inject
    private ChangeFactory changeFactory;

    // Recieve rawCommit
    // Create commit object
    // calculate hash of commit
    // start visitor on each change in the commit
    // discard all changes that failed the visitors validation
    // return commit with only valid changes

    @Override
    public Commit createCommit(RawCommit rawCommit) {
        Commit commit = new Commit();
        commit.setCommitHash(calculateHash(rawCommit));
        commit.setPushDate(rawCommit.getPushDate());
        commit.setUser(rawCommit.getUser());
        commit.setMessage(rawCommit.getMessage());
        commit.setAffectedServices(rawCommit.getAffectedServices());

        List<Change> changes = new ArrayList<Change>();

        for (RawChange change : rawCommit.getChanges()) {
            Change validatedChange = changeFactory.createChange(change);
            if (true) { // TODO: Validate change using visitor pattern.
                changes.add(validatedChange);
            }
        }

        commit.setChanges(changes);
        return commit;
    }

    private int calculateHash(RawCommit rawCommit) {
        return rawCommit.getPushDate().hashCode()
        + rawCommit.getUser().hashCode()
        + rawCommit.getMessage().hashCode()
        + rawCommit.getChanges().stream().mapToInt(RawChange::hashCode).sum();
    }
}
