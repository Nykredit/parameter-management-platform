import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';

import AuditPage from './routes/Audit/AuditPage';
import { Environment } from './hooks/useEnvironment';
import ErrorPage from './routes/ErrorPage';
import Layout from './routes/Layout';
import ParametersPage from './routes/Parameters/ParametersPage';
import SignInPage from './routes/SignIn/SignInPage';
import SignOut from './routes/SignOut/SignOut';

const router = createBrowserRouter([
    {
        path: '/signin',
        element: <SignInPage />
    },
    {
        path: '/signout',
        element: <SignOut />
    },
    {
        path: '/',
        loader: () => {
            return redirect(`/${Environment.INVALID}/parameters`);
        }
    },
    {
        path: '/:environment/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        loader: ({ request, params }) => {
            if (!params.environment) {
                // This should never happen. Can only occour if route is misconfigured
                throw new Error('Matched environment route with no environment param');
            }

            // Redirect to Enviroment.INVALID if environment is not recognized
            if (
                !Object.entries(Environment)
                    .map((e) => e[1] as string)
                    .includes(params.environment)
            ) {
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
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
