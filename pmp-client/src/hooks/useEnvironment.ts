import { useParams } from 'react-router-dom';

export enum Environment {
    TEST = 'test',
    DEV = 'dev',
    PREPROD = 'preprod',
    PROD = 'prod',
    INVALID = 'invalid'
}

const VALID_ENVIRONMENTS = [Environment.TEST, Environment.DEV, Environment.PREPROD, Environment.PROD];

export const isEnvironmentValid = (environment: string) => {
    return VALID_ENVIRONMENTS.includes(environment as Environment);
};

const useEnvironment = () => {
    const { environment = Environment.INVALID } = useParams<{ environment: Environment }>();
    const isValid = isEnvironmentValid(environment);
    return {
        environment,
        isValid
    };
};

export default useEnvironment;
