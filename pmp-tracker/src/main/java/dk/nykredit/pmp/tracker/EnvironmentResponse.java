package dk.nykredit.pmp.tracker;

import java.util.ArrayList;

public class EnvironmentResponse {
    private ArrayList<String> environmentNames;

    public EnvironmentResponse(ArrayList<String> environmentNames) {

        this.environmentNames = environmentNames;
    }

    // Needed for JSON serialization.
    public ArrayList<String> getEnvironmentNames() {
        return environmentNames;
    }
}
