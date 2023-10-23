import {
    Button,
    TopAppBar,
    TopAppBarActionItem,
    TopAppBarFixedAdjust,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle
} from 'rmwc';
import { Link, Outlet } from 'react-router-dom';

/**
 * Root layout encompassing the entire app
 *
 * Adds a top app bar for navigation and prohibits the user from navigating to any page before picking an environment
 */
const Layout = () => {
    return (
        <>
            <TopAppBar fixed>
                <TopAppBarRow>
                    <TopAppBarSection alignStart>
                        <TopAppBarTitle>Title goes here</TopAppBarTitle>
                    </TopAppBarSection>
                    <TopAppBarSection alignStart>
                        <Button tag={Link} to={`/parameters`} label={'Parameters'} />
                        <Button tag={Link} to={`/audit`} label={'Audit'} />
                    </TopAppBarSection>
                    <TopAppBarSection alignEnd>
                        <TopAppBarActionItem icon='favorite' />
                        <TopAppBarActionItem icon='star' />
                        <TopAppBarActionItem icon='mood' />
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
            <TopAppBarFixedAdjust />
            <Outlet />
        </>
    );
};

export default Layout;
