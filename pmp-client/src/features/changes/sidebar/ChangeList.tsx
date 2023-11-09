import { Button, Grid, GridCell, GridRow } from 'rmwc';
import useCommitStore from '../useCommitStore';
import useEnvironment from '../../environment/useEnvironment';
import ServiceChangeList from './ServiceChangeList';

/**
 * Displays a list of changes made in the current commit.
 */
const ChangeList = () => {

    const serviceChanges = useCommitStore((s) => s.serviceChanges).sort((a, b) => a.service.name.localeCompare(b.service.name));
    const clearChanges = useCommitStore((s) => s.clear);
    const environment = useEnvironment().environment;

    if (serviceChanges.length === 0) return;

    // TODO: Implement push functionality

    return (
        <>
            <Grid style={{padding: '0px'}}>
                <GridCell span={12} style={{overflow: 'clip'}}>
                    <GridRow style={{padding: '5px'}}>
                        <GridCell span={8}>
                            <Button outlined onClick={() => {console.log("Push not implemented, changes to push:" + serviceChanges)}}>Push to {environment}</Button>
                        </GridCell>
                        <GridCell span={4} style={{textAlign: 'right'}}>
                            <Button onClick={clearChanges} danger outlined trailingIcon="delete">Delete All</Button>
                        </GridCell>
                    </GridRow>
                    <GridRow style={{padding: '0px'}}>
                        <GridCell span={12} style={{padding: '0px'}}>
                            <GridRow style={{padding: '0px'}}>
                                <GridCell span={12} style={{maxHeight: '80vh', overflowY: 'scroll', padding: '0px'}}>
                                    {serviceChanges.map((serviceChange) => (
                                        <ServiceChangeList key={serviceChange.service.address} serviceChanges={serviceChange}/>
                                    ))}
                                </GridCell>
                            </GridRow>
                        </GridCell>
                    </GridRow>
                    
                </GridCell>
            </Grid>
        </>
    );
};

export default ChangeList;
