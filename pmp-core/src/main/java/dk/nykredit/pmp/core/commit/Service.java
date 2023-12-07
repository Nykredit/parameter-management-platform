package dk.nykredit.pmp.core.commit;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Service {
    private String name;
    @JsonProperty("address")
    private String pmpRoot;
    private Environment environment;

    public Service() {
    }

    public Service(String name, String pmpRoot, String environment) {
        this.name = name;
        this.pmpRoot = pmpRoot;
        this.environment = new Environment(environment);
    }
}
