import ServiceListElement from "./ServiceListElement";
import { Service } from "../../features/services/types";
import { Environment } from "../../features/environment/environment";
import useEnvironment from "../../features/environment/useEnvironment";


const servicesMock: Service[] = [
	{
		name: "service1",
		address: "1",
		environment: Environment.TEST
	},
	{
		name: "service2",
		address: "2",
		environment: Environment.TEST
	},
	{
		name: "service3",
		address: "3",
		environment: Environment.TEST
	},
	{
		name: "service4",
		address: "4",
		environment: Environment.TEST
	}
];



const ServiceList = () => {
	// const services = useSelectedServices((s) => s.services);
	const services = servicesMock;
	const { environment } = useEnvironment();

	const servicesInEnviroment = services.filter((service) => service.environment === environment);

	return (
		<>
			<h2>Parameters</h2>
			{servicesInEnviroment.map((service) => (
				<ServiceListElement service={service} />
			))
			}
		</>
	);
};


export default ServiceList;