import { Card, CircularProgress, List, ListDivider, ListItem, Typography } from 'rmwc';

import useSelectedServices from './useSelectedServices';
import useServices from './useServices';

const ListofServices = () => {
    const { data: services, isPending, error } = useServices();
    const [selectedServices, setSelectedServices] = useSelectedServices();

    if (isPending)
        return (
            <>
                <Typography use='headline6'>Waiting on services</Typography> <CircularProgress />
            </>
        );

    if (error) return <Typography use='headline6'>Error loading services</Typography>;

    const sortedServices = services.sort((s1, s2) => s1.name.localeCompare(s2.name));

    return (
        <>
            <Card outlined>
                <List>
                    <ListItem disabled className='!opacity-100'>
                        Services
                    </ListItem>
                    <ListDivider />
                    {sortedServices.map((s) => (
                        <ListItem
                            key={s.name}
                            onClick={() => setSelectedServices([s])}
                            selected={selectedServices.includes(s)}
                        >
                            {s.name}
                        </ListItem>
                    ))}
                </List>
            </Card>
        </>
    );
};

export default ListofServices;
