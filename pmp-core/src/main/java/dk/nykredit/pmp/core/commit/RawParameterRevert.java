package dk.nykredit.pmp.core.commit;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import dk.nykredit.pmp.core.audit_log.ChangeType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RawParameterRevert implements RawChange {
    private String name;
    private String type;
    private String id;
    private long commitHash;
    private ChangeType revertType;
    private String oldValue;
    private String newValue;
    private Service service;

    public RawParameterRevert() {
    }

    public RawParameterRevert(String name, String type, long commitHash, ChangeType revertType) {
        this.name = name;
        this.type = type;
        this.commitHash = commitHash;
        this.revertType = revertType;
    }
}
