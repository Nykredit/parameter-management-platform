import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';

import AuditPage from './audit/AuditPage';
import ErrorPage from './ErrorPage';
import Layout from './Layout';
import ParametersPage from './parameters/ParametersPage';
import SignInPage from './signin/SignInPage';
import SignOut from './signout/SignOut';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        children: [
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
                element: <Layout />,
                children: [
                    {
                        path: '/',
                        loader: () => {
                            return redirect(`/parameters`);
                        }
                    },
                    {
                        path: '/parameters',
                        element: <ParametersPage />
                    },
                    {
                        path: '/audit',
                        element: <AuditPage />
                    }
                ]
            }
        ]
    }
]);

const RootRouter = () => <RouterProvider router={router} />;

export default RootRouter;
