package dk.nykredit.pmp.core.commit;

public interface ChangeFactory {
    Change createChange(RawChange rawChange);
    ParameterChange createChange(RawParameterChange rawChange);
    ParameterRevert createChange(RawParameterRevert rawChange);
    CommitRevert createChange(RawCommitRevert rawChange);
}
