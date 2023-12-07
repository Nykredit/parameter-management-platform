package dk.nykredit.pmp.core.commit;

public class ChangeFactoryImpl implements ChangeFactory{

    public Change createChange(RawChange rawChange) {
        if (rawChange instanceof RawParameterChange) {
            return createChange((RawParameterChange) rawChange);
        } else if (rawChange instanceof RawParameterRevert) {
            return createChange((RawParameterRevert) rawChange);
        } else if (rawChange instanceof RawCommitRevert) {
            return createChange((RawCommitRevert) rawChange);
        } else {
            throw new IllegalArgumentException("Unknown raw change type: " + rawChange.getClass().getName());
        }
    }

    public ParameterChange createChange(RawParameterChange rawChange) {
        return new ParameterChange(
            rawChange.getName(),
            rawChange.getType(),
            rawChange.getOldValue(),
            rawChange.getNewValue(),
            rawChange.getService(),
            rawChange.getId()
        );
    }

    public ParameterRevert createChange(RawParameterRevert rawChange) {
        return new ParameterRevert(
            rawChange.getName(),
            rawChange.getType(),
            rawChange.getOldValue(),
            rawChange.getNewValue(),
            rawChange.getCommitHash(),
            rawChange.getRevertType(),
            rawChange.getService(),
            rawChange.getId()
        );
    }

    public CommitRevert createChange(RawCommitRevert rawChange) {
        return new CommitRevert(
            rawChange.getCommitHash()
        );
    }
}
