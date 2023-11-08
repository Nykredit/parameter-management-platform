import { ErrorResponse } from 'react-router-dom';

/**
 * Checks if the given error is a react router ErrorResponse object.
 * @param error The error to check.
 * @returns True if the error is an ErrorResponse object.
 */
const isErrorResponse = (error: ErrorResponse | Error): error is ErrorResponse => {
    return (error as ErrorResponse).status !== undefined;
};

export default isErrorResponse;
