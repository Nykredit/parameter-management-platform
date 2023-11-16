package dk.nykredit.pmp.tracker;

import java.util.ArrayList;

public class Tracker {

	private static ArrayList<Service> services;

	public Tracker(){
		if (services == null) {
			services = new ArrayList<>();
		}
	}

	public ArrayList<Service> getServices(){

		return services;
	}

	public void registerService(Service service) {
		
		services.add(service);
	}

	public ArrayList<Service> readServices() {
		return services;
	}
}