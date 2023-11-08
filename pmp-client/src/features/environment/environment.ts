import { createEnumMapper } from '../../utils/enum';

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
 * Human readable versions of the environments.
 */
export enum ReadableEnvironment {
    TEST = 'Testing',
    DEV = 'Development',
    PREPROD = 'Pre-Production',
    PROD = 'Production',
    INVALID = 'No Environment'
}

/**
 * Map an environment to its human readable version.
 * @param environment The environment to map.
 * @returns The human readable version of the environment.
 */
export const toReadableEnvironment = createEnumMapper(Environment, ReadableEnvironment);

/**
 * Map a human readable environment to its environment.
 * @param environment The human readable environment to map.
 * @returns The environment.
 */
export const toEnvironment = createEnumMapper(ReadableEnvironment, Environment);

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
