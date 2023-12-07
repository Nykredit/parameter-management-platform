package dk.nykredit.pmp.core.commit;

public interface CommitFactory {
    Commit createCommit(RawCommit rawCommit);
}
