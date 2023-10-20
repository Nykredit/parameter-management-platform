import { ErrorResponse } from 'react-router-dom';

const isErrorResponse = (error: ErrorResponse | Error): error is ErrorResponse => {
    return (error as ErrorResponse).status !== undefined;
};

export default isErrorResponse;
