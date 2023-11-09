import exp from "constants";
import { useEffect, useState } from "react";
import { CollapsibleList, SimpleListItem } from "rmwc";
import ParameterList from "./ParameterList";
import { Parameter } from "./types";
import { unknown } from "zod";
import ServiceListElement from "./ServiceListElement";


const activeServicesMock = [
	"service1",
	"service2",
	"service3",
	"service4",
	"service5",
];


const parametersMock: Parameter<unknown>[] = [
	{
		id: "1",
		service: "service1",
		name: "key1",
		type: "Number",
		value: 1,
	},
	{
		id: "2",
		name: "key2",
		service: "service1",
		type: "String",
		value: "value2erfwsdhfdiweuidsnviuwendiukweds",
	},
	{
		id: "3",
		name: "key3",
		service: "service2",
		type: "Boolean",
		value: "true",
	},
];

const ServiceList = () => {
	// const activeServices = useActiveServices();
	const activeServices = activeServicesMock;

	const [parameters, setParameters] = useState<Parameter<unknown>[]>([]);

	useEffect(() => {
		setParameters(parametersMock);
	}, []);
	
	const handleParameterChange = (parameter: Parameter<unknown>) => {
		setParameters(parameters.map((p) => {
			if (p.id === parameter.id) {
				return parameter;
			}
			return p;
		}));	
	};

	return (
		<>
			<h2>Parameters</h2>
			{activeServices.map((serviceName) => (
				<ServiceListElement onParamChange={handleParameterChange} parameters={parameters} serviceName={serviceName}/>
			))
			}
		</>
	);
};


export default ServiceList;