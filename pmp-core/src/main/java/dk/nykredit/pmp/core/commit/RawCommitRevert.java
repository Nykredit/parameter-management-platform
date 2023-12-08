package dk.nykredit.pmp.core.commit;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RawCommitRevert implements RawChange {
    private long commitHash;

    public RawCommitRevert() {
    }

    public void setCommitHash(String commitHash) {
        this.commitHash = Long.parseUnsignedLong(commitHash, 16);
    }
}
