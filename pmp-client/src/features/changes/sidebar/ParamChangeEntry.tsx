import { Grid, GridCell, GridRow, Icon, IconButton, List, ListItemPrimaryText, ListItemSecondaryText, TextField} from "rmwc";
import { ParameterChange } from "../types";
import useCommitStore from "../useCommitStore";
import { Service } from "../../services/types";

const ParamChangeEntry = ({ change, service }: { change: ParameterChange, service: Service }) => {

    const removeParameterChange = useCommitStore((s) => s.removeParameterChange);

    

    return (
            <Grid style={{width: '100%', textAlign: 'left', padding: '10px'}}>
                <GridCell span={12}>
                    <Grid style={{padding: '0px'}}>
                        <GridRow style={{}}>
                            <GridCell span={10} style={{}}>
                                <List twoLine>
                                    <ListItemPrimaryText>{change.parameter.name}</ListItemPrimaryText>
                                    <ListItemSecondaryText>{change.parameter.type}</ListItemSecondaryText>
                                </List>
                            </GridCell>
                            <GridCell span={2} style={{textAlign: 'right'}}>
                                <IconButton onClick={() => {removeParameterChange(service, change)}} icon="delete"></IconButton>
                            </GridCell>
                            <GridCell span={12} style={{}}>
                                <GridRow>
                                    <GridCell span={5}>
                                        <TextField value={change.parameter.value.toString()} label="Old Value" disabled>
                                        </TextField>
                                    </GridCell>
                                    <GridCell span={2} style={{textAlign: 'center'}}>
                                        <Icon icon="arrow_forward"></Icon>
                                    </GridCell>
                                    <GridCell span={5} style={{padding: '0px'}}>
                                        <TextField style={{}} label="New Value" value={change.newValue.toString()} type={change.parameter.type}>
                                        </TextField>
                                    </GridCell>
                                </GridRow>
                            </GridCell>
                        </GridRow>
                    </Grid>
                </GridCell>
            </Grid>
    )


}

export default ParamChangeEntry;