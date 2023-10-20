import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AuditPage from './routes/Audit/AuditPage';
import ErrorPage from './routes/ErrorPage';
import HomePage from './routes/HomePage';
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
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/:enviroment/',
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

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
