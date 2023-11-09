import React from "react";
import { Drawer, DrawerHeader, DrawerTitle, DrawerSubtitle, DrawerContent, Button, DrawerAppContent, Typography, GridRow, Grid, GridCell, IconButton } from "rmwc";
import useEnvironment from "../../environment/useEnvironment";
import ChangeList from "./ChangeList";
 
const PendingChanges = () => {

    const [open, setOpen] = React.useState(false);
    const environment = useEnvironment();

    return (
        <>
        <div style={{}}>
            {/* Dismissible Drawer */}
            {/** 
             * TODO: change from % to vh units.
             * TODO: Make "no changes" message appear when there are no changes.
             * 
            */}
            <Drawer dismissible open={open} dir="rtl" style={{width: '30%', height: '93.35%', marginTop: '-24px', borderLeft: '1px solid'}}>
                <Grid style={{padding: '0px', height: '100%', width: '100%'}}>
                    <GridRow style={{paddingLeft: '10px'}}>
                        <GridCell span={12} style={{}}>
                            <GridRow style={{padding: '0px',}}>
                                <GridCell span={4} order={1} style={{}}>
                                    <IconButton onClick={() => setOpen(!open)} icon="chevron_right"></IconButton>
                                </GridCell>
                                <GridCell span={8} order={2} style={{}}>
                                    <DrawerHeader dir="ltr" style={{padding: '0px'}}>
                                        <DrawerTitle><Typography use="headline4">Pending Changes</Typography></DrawerTitle>
                                        <DrawerSubtitle><Typography use="subtitle1">environment: {environment.environment}</Typography></DrawerSubtitle>
                                    </DrawerHeader>
                                </GridCell>
                            </GridRow>
                        </GridCell>
                    </GridRow>
                    <GridRow style={{height: '100%'}}>
                        <GridCell span={12} style={{height: '100%'}}>
                            <DrawerContent dir="ltr" style={{marginBottom: '0px', height: '100%'}}>
                                <ChangeList/>
                            </DrawerContent>
                        </GridCell>
                    </GridRow>
                </Grid>
            </Drawer>
  
          {/* Optional DrawerAppContent */}
          {/** TODO: Figure out what this is, why it is neccesary, if it even is? */}
          <DrawerAppContent
            style={{ minHeight: '15rem', padding: '1rem' }}
          >
            DrawerAppContent is an optional component that will resize
            content when the dismissible drawer is open and closed. It
            must be placed directly after the Drawer component.
          </DrawerAppContent>
        </div>
  
        {/* Button to toggle the Drawer */}
        {/** TODO: Make button be on the side, smaller, and allow space for central page. */}
        <div style={{ textAlign: 'center' }}>
          <Button onClick={() => setOpen(!open)} raised>
            Toggle Dismissible
          </Button>
        </div>
      </>
  
    );
      

};

export default PendingChanges;