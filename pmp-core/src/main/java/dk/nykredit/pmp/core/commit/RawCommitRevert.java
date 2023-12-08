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

    @Override
    public String toString() {
        return "RawCommitRevert{" +
                "commitHash=" + commitHash +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof RawCommitRevert)) return false;

        RawCommitRevert that = (RawCommitRevert) o;

        return commitHash == that.commitHash;
    }

    @Override
    public int hashCode() {
        return (int) (commitHash ^ (commitHash >>> 32));
    }
}
