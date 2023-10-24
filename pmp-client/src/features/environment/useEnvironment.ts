import { Environment, isEnvironmentValid } from './environment';

import { useParams } from 'react-router-dom';

/**
 * Get the current environment from the URL.
 * @returns The current environment, and wether it is valid. Purposefully does NOT provide an easy way to change the environment, as that should only be done in very specific circumstances.
 */
const useEnvironment = () => {
    const { environment = Environment.INVALID } = useParams<{ environment: Environment }>();
    const isValid = isEnvironmentValid(environment);
    return {
        environment,
        isValid
    };
};

export default useEnvironment;
