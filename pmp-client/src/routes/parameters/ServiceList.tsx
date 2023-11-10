import ServiceListElement from "./ServiceListElement";
import { Service } from "../../features/services/types";
import { Environment } from "../../features/environment/environment";
import useEnvironment from "../../features/environment/useEnvironment";
import { useEffect, useState } from "react";
import { boolean } from "zod";
import { Button } from "rmwc";
import useSelectedServices from "../../features/services/useSelectedServices";


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

interface ColapseState {
	service: Service;
	isCollapsed: boolean;
}


const ServiceList = () => {
	const [services, setServices] = useSelectedServices();

	return (
		<>
			<h2>Parameters</h2>
			{services.map((service) => (
				<ServiceListElement service={service}/>
			))
			}
		</>
	);
};


export default ServiceList;