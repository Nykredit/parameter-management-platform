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

import { VALID_ENVIRONMENTS } from '../features/environment/environment';
import { capitaliseFirstLetter } from '../utils/string';
import useEnvironment from '../features/environment/useEnvironment';
import useSetEnvironment_UNSAFE from '../features/environment/useSetEnvironment_UNSAFE';

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
                    <TopAppBarSection alignStart className='bg-red-300'>
                        <Button tag={Link} to={`/${environment}/parameters`} label={'Parameters'} />
                        <Button tag={Link} to={`/${environment}/audit`} label={'Audit'} />
                    </TopAppBarSection>
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
                    <div>
                        <p>To proceed, please pick an environment</p>

                        {/** This expression is similar to the commented one below, automatically generating the buttons fron the list of valid environments */}
                        {VALID_ENVIRONMENTS.map((env) => (
                            <button
                                key={env}
                                className='bg-gray-300 rounded-3xl pl-2 pr-2'
                                onClick={() => setEnvironment(env)}
                            >
                                {capitaliseFirstLetter(env)}
                            </button>
                        ))}

                        {/* <button onClick={() => setEnvironment(Environment.TEST)}>Test</button>
                        <button onClick={() => setEnvironment(Environment.DEV)}>Dev</button>
                        <button onClick={() => setEnvironment(Environment.PREPROD)}>Preprod</button>
                        <button onClick={() => setEnvironment(Environment.PROD)}>Prod</button> */}
                    </div>
                </>
            )}
            {isValid && <Outlet />}
        </>
    );
};

export default Layout;
