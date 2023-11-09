import { CollapsibleList, SimpleListItem } from "rmwc";
import ParameterList from "./ParameterList";
import { useEffect, useState } from "react";
import { Parameter } from "../../features/parameters/types";
import { Service } from "../../features/services/types";

const parametersMock: Parameter[] = [
	{
		id: "1",
		name: "key1",
		type: "Number",
		value: 1,
	},
	{
		id: "2",
		name: "key2",
		type: "String",
		value: "value2erfwsdhfdiweuidsnviuwendiukweds",
	},
	{
		id: "3",
		name: "key3",
		type: "Boolean",
		value: "true",
	},
];

interface ServiceListElementProps {
	service: Service;
}

const ServiceListElement = (props: ServiceListElementProps) => {
	const { service } = props;
	const [parameters, setParameters] = useState<Parameter[]>([]);

	useEffect(() => {
		// Use fetch instead of mock
		setParameters(parametersMock);
	}, []);

	const hasParms = parameters.length > 0;

	return (
		<CollapsibleList
			handle={
				<SimpleListItem
					className="serviceListItem"
					text={service.name}
					metaIcon="chevron_right"
				/>
			}
		>
			{hasParms && <ParameterList service={service} parameters={parameters} />}
		</CollapsibleList>
	);
};


export default ServiceListElement;