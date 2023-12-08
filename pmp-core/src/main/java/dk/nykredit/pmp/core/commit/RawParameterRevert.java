package dk.nykredit.pmp.core.commit;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RawParameterRevert implements RawChange {
    private String parameterName;
    private long commitHash;
    private String revertType;
    private Service service;

    public RawParameterRevert() {
    }

    public RawParameterRevert(String parameterName, String revertType, long commitHash, Service service) {
        this.parameterName = parameterName;
        this.commitHash = commitHash;
        this.revertType = revertType;
    }

    public void setCommitHash(String commitHash) {
        this.commitHash = Long.parseUnsignedLong(commitHash, 16);
    }
}
