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

import { Environment } from '../features/environment/environment';
import { capitaliseFirstLetter } from '../utils/string';
import useEnvironment from '../features/environment/useEnvironment';
import useSetEnvironment_UNSAFE from '../features/environment/useSetEnvironment_UNSAFE';

/**
 * Root layout encompassing the entire app
 *
 * Adds a top app bar for navigation and prohibits the user from navigating to any page before picking an environment
 */
const Layout = () => {
    const { environment, isValid } = useEnvironment();
    const setEnvironment = useSetEnvironment_UNSAFE();

    return (
        <>
            <TopAppBar fixed>
                <TopAppBarRow>
                    <TopAppBarSection alignStart className='bg-red-500'>
                        <TopAppBarTitle>{capitaliseFirstLetter(environment)}</TopAppBarTitle>
                    </TopAppBarSection>
                    {isValid && (
                        <TopAppBarSection alignStart className='bg-red-300'>
                            <Button tag={Link} to={`/${environment}/parameters`} label={'Parameters'} />
                            <Button tag={Link} to={`/${environment}/audit`} label={'Audit'} />
                        </TopAppBarSection>
                    )}
                    <TopAppBarSection alignEnd>
                        <TopAppBarActionItem icon='favorite' />
                        <TopAppBarActionItem icon='star' />
                        <TopAppBarActionItem icon='mood' />
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
            <TopAppBarFixedAdjust />
            {!isValid && (
                <>
                    <div className='prose max-w-full'>
                        <h3>To proceed, please pick an environment</h3>

                        <Button raised onClick={() => setEnvironment(Environment.TEST)}>
                            Test
                        </Button>
                        <Button outlined onClick={() => setEnvironment(Environment.DEV)}>
                            Dev
                        </Button>
                        <Button outlined danger onClick={() => setEnvironment(Environment.PREPROD)}>
                            Preprod
                        </Button>
                        <Button raised danger onClick={() => setEnvironment(Environment.PROD)}>
                            Prod
                        </Button>
                    </div>
                </>
            )}
            {isValid && <Outlet />}
        </>
    );
};

export default Layout;
