/**
 * Recognised environments. Includes 'invalid' to represent all invalid environment.
 */
export enum Environment {
    TEST = 'test',
    DEV = 'dev',
    PREPROD = 'preprod',
    PROD = 'prod',
    INVALID = 'invalid'
}

/**
 * Recognised environments. Includes 'invalid' to represent all invalid environment.
 */
export const ENVIRONMENTS = Object.values(Environment);

/** Valid environments */
export const VALID_ENVIRONMENTS = [Environment.TEST, Environment.DEV, Environment.PREPROD, Environment.PROD];

/**
 * Check if the given environment is valid.
 * @param environment The environment to check.
 * @returns True if the environment is valid, false otherwise.
 */
export const isEnvironmentValid = (environment: string) => {
    return VALID_ENVIRONMENTS.includes(environment as Environment);
};
