import { CollapsibleList, SimpleListItem } from "rmwc";
import { Parameter } from "./types";
import ParameterList from "./ParameterList";
import { useState } from "react";


interface ServiceListElementProps {
	serviceName: string;
	parameters: Parameter<unknown>[];
}

const ServiceListElement = (props: ServiceListElementProps) => {
	const { serviceName, parameters } = props;

	return (
		<CollapsibleList
			handle={
				<SimpleListItem
					text={serviceName}
					metaIcon="chevron_right"
				/>
			}
		>
			<ParameterList parameters={parameters} onEdit={() => { }} />
		</CollapsibleList>
	);
};


export default ServiceListElement;