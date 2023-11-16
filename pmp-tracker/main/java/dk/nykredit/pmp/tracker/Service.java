package dk.nykredit.pmp.tracker;

public class Service {

    // TODO: add permissions.
    // TODO: add last ping timestamp.

    private final String address;
    
    public Service(String address) {

        this.address = address;
    }

    public String getAddress() {
        return address;
    }
    

} 
