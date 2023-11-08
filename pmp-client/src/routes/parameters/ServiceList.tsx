import exp from "constants";
import { useState } from "react";
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


const parametersMock = [
	{
		id: "1",
		name: "key1",
		type: "number",
		value: 1,
	},
	{
		id: "2",
		name: "key2",
		type: "string",
		value: "value2",
	},
	{
		id: "3",
		name: "key3",
		type: "boolean",
		value: "true",
	},
] as Parameter<unknown>[];

const ServiceList = () => {
	// const activeServices = useActiveServices();
	const activeServices = activeServicesMock;
	const parameters = parametersMock;


	return (
		<>
			<h2>Parameters</h2>
			{activeServices.map((serviceName) => (
				<ServiceListElement parameters={parameters} serviceName={serviceName}/>
			))
			}

		</>
	);
};


export default ServiceList;