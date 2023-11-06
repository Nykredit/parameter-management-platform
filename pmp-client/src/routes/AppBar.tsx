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

import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import useEnvironment from '../features/environment/useEnvironment';
import useSetEnvironment_UNSAFE from '../features/environment/useSetEnvironment_UNSAFE';

/**
 * The top app bar in the main application layout.
 *
 * Handles switching between environments.
 *
 * TODO: Environment logic should be moved to a separate component.
 */
const AppBar = () => {
    const { environment, isValid } = useEnvironment();
    const setEnvironment = useSetEnvironment_UNSAFE();

    const selectOptions = VALID_ENVIRONMENTS.map((env) => ({
        value: env,
        label: toReadableEnvironment(env)
    }));

    const handleSelectChange = (evt: ChangeEvent<HTMLSelectElement>) => {
        const newEnv = evt.currentTarget.value as typeof environment;
        console.log('Changing environment to', newEnv);
        setEnvironment(newEnv);
    };

    return (
        <>
            <TopAppBar fixed>
                <TopAppBarRow>
                    <TopAppBarSection alignStart className='bg-red-500'>
                        <Select value={environment} options={selectOptions} onChange={handleSelectChange} />
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
