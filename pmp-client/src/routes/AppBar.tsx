import {
    Button,
    Select,
    TopAppBar,
    TopAppBarActionItem,
    TopAppBarFixedAdjust,
    TopAppBarRow,
    TopAppBarSection
} from 'rmwc';
import { VALID_ENVIRONMENTS, toReadableEnvironment } from '../features/environment/environment';

import { Link } from 'react-router-dom';
import useEnvironment from '../features/environment/useEnvironment';

const AppBar = () => {
    const { environment, isValid } = useEnvironment();

    return (
        <>
            <TopAppBar fixed>
                <TopAppBarRow>
                    <TopAppBarSection alignStart className='bg-red-500'>
                        {/* <TopAppBarTitle>{capitaliseFirstLetter(environment)}</TopAppBarTitle> */}
                        {/* <TopAppBarTitle> */}
                        <Select
                            value={toReadableEnvironment(environment)}
                            options={VALID_ENVIRONMENTS.map(toReadableEnvironment)}
                        />
                        {/* </TopAppBarTitle> */}
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
        </>
    );
};

export default AppBar;
