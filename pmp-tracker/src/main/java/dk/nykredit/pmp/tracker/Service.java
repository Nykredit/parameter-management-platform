package dk.nykredit.pmp.tracker;

import java.util.Objects;

public class Service {

    // A millisecond instant, used to identify when the service last pinged the tracker.
    private long lastRefresh;
    private String address;
    private String name;

    public Service() {
        lastRefresh = System.currentTimeMillis();
    }


    /** All field that need to be serialized to/from JSON must
     *  have getters and setters for the serialization to work.
    */
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public void refresh() {
        lastRefresh = System.currentTimeMillis();
    }
    public long getLastRefresh() {
        return lastRefresh;
    }

    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }

    /**
     * Checks if the service has gone too long without a refresh.
     * @param staleTimeLimit the time in seconds within which the service must have been refreshed.
     * @return true if the service has gone too long without a refresh, false otherwise.
     */
    public boolean isStale(int staleTimeLimit) {
        
        if (System.currentTimeMillis() - lastRefresh > staleTimeLimit) {
            return true;
        }

        return false;

    }

    @Override
    public String toString() {
        
        return "Service: " + address + " lastRefresh: " + lastRefresh;
    }

    /**
     * Two services are equal if they have the same address, as no two services can run on the same address.
     * @param object the object to compare to.
     * @return true if the services are equal, false otherwise.
     */
    @Override
    public boolean equals(Object object) {

        if (object == this) {
            return true;
        }

        if (!(object instanceof Service)) {
            return false;
        }

        Service service = (Service) object;

        return (service.getAddress().equals(this.getAddress()));
    }

    @Override
    public int hashCode() {
        return Objects.hash(address);
    }

    @Override
    public Service clone() {
        Service service = new Service();
        service.setAddress(this.getAddress());
        return service;
    }
} 
