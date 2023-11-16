package dk.nykredit.pmp.tracker;

import java.util.ArrayList;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;

@Path("services")
public class ServiceResource {

	private Tracker tracker;

	public ServiceResource() {
		tracker = new Tracker();
	}

	@GET
	@Produces({ MediaType.APPLICATION_JSON })
	public ArrayList<Service> services() {
		
		return tracker.getServices();
	}

	@POST
	public Service services(
		@QueryParam("address") String address) {

			// TODO: recieve permissions.
			// TODO: add usefull responses.

		if (address == null || address.trim().isEmpty()) {
			return new Service("error"); 
		}

		Service service = new Service(address);

		tracker.registerService(service);

		return service;
	}
}