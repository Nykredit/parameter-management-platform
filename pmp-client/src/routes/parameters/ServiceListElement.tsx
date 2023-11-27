import { CollapsibleList, SimpleListItem, Typography } from 'rmwc';

import ParameterList from './ParameterList';
import { Service } from '../../features/services/types';
import useParameterQuery from '../../features/parameters/useParameterQuery';

interface ServiceListElementProps {
	service: Service;
}

const ServiceListElement = ({ service }: ServiceListElementProps) => {
    const { data: parameters, error } = useParameterQuery(service);

    return (
        <CollapsibleList
            defaultOpen
            handle={<SimpleListItem className='serviceListItem' text={service.name} metaIcon='chevron_right' />}
        >
            {parameters && <ParameterList service={service} parameters={parameters} />}
            {error && <Typography use='headline6'>Error loading parameters</Typography>}
        </CollapsibleList>
    );
};

export default ServiceListElement;
