package dk.nykredit.pmp.tracker;

import java.util.ArrayList;

public class ServiceResponse {
    private ArrayList<Service> services;
    private String environment;

    public ServiceResponse(ArrayList<Service> services, String environment) {
        this.services = services;
        this.environment = environment;
    }

    // Needed for JSON serialization.
    public ArrayList<Service> getServices() {
        return services;
    }

    // Needed for JSON serialization.
    public String getEnvironment() {
        return environment;
    }
}
