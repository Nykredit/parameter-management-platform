package dk.nykredit.pmp.core.commit;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RawParameterChange implements RawChange {
    private String name;
    private String type;
    private String id;

    @JsonProperty("value")
    private String oldValue;
    private String newValue;

    private Service service;

    public RawParameterChange(String name, String type, String oldValue, String newValue, Service service) {
        this.name = name;
        this.type = type;
        this.oldValue = oldValue;
        this.newValue = newValue;
        this.service = service;
    }

    public RawParameterChange() {
    }
}
