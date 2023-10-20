import { ErrorResponse, useRouteError } from 'react-router-dom';

import isErrorResponse from '../types/predicates/isErrorResponse';

const ErrorPage = () => {
    const error = useRouteError() as ErrorResponse | Error;
    console.error(error);

    return (
        <div id='error-page'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{isErrorResponse(error) ? error.statusText : error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;
