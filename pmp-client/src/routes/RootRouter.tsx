import { ENVIRONMENTS, Environment } from '../hooks/useEnvironment';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';

import AuditPage from './Audit/AuditPage';
import ErrorPage from './ErrorPage';
import Layout from './Layout';
import ParametersPage from './Parameters/ParametersPage';
import SignInPage from './SignIn/SignInPage';
import SignOut from './SignOut/SignOut';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                loader: () => {
                    return redirect(`/${Environment.INVALID}/parameters`);
                }
            },
            {
                path: '/signin',
                element: <SignInPage />
            },
            {
                path: '/signout',
                element: <SignOut />
            },
            {
                path: '/:environment/',
                element: <Layout />,
                loader: ({ request, params }) => {
                    if (!params.environment) {
                        // This should never happen. Can only occour if route is misconfigured
                        throw new Error('Matched environment route with no environment param');
                    }

                    // None of the below routes will match if environment is not followed by another path segment,
                    if (/^(https?):\/\/[^/]+\/[^/]+\/?$/.test(request.url)) {
                        throw new Response('', {
                            status: 404,
                            statusText: 'Not Found'
                        });
                    }

                    // Redirect to Enviroment.INVALID if environment is not recognized
                    if (!ENVIRONMENTS.includes(params.environment as Environment)) {
                        return redirect(request.url.replace(params.environment, Environment.INVALID));
                    }

                    return null;
                },
                children: [
                    {
                        path: 'parameters',
                        element: <ParametersPage />
                    },
                    {
                        path: 'audit',
                        element: <AuditPage />
                    }
                ]
            }
        ]
    }
]);

const RootRouter = () => <RouterProvider router={router} />;

export default RootRouter;
