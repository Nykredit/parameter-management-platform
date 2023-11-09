import { CollapsibleList, SimpleListItem } from "rmwc";
import { Parameter } from "./types";
import ParameterList from "./ParameterList";
import { useState } from "react";


interface ServiceListElementProps {
	serviceName: string;
	parameters: Parameter<unknown>[];
	onParamChange: (parameter: Parameter<unknown>) => void;
}

const ServiceListElement = (props: ServiceListElementProps) => {
	const { serviceName, parameters, onParamChange } = props;
	const parametersFromService = parameters.filter((parameter) => parameter.service === serviceName);

	return (
		<CollapsibleList
			handle={
				<SimpleListItem
					className="serviceListItem"
					text={serviceName}
					metaIcon="chevron_right"
				/>
			}
		>
			<ParameterList onParamChange={onParamChange} parameters={parametersFromService} />
		</CollapsibleList>
	);
};


export default ServiceListElement;