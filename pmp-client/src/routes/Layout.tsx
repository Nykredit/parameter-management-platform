import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import useEnvironment, { Environment } from '../hooks/useEnvironment';

const Layout = () => {
    const { environment, isValid } = useEnvironment();
    const navigate = useNavigate();
    const location = useLocation();

    const setEnvironment = (newEnvironment: Environment) => {
        navigate(location.pathname.replace(environment, newEnvironment) + location.search + location.hash);
    };

    return (
        <>
            <div className='bg-gray-500'>
                <p>App bar goes here</p>
                <p>Current enviroment: {isValid ? environment : 'invalid'}</p>
            </div>
            {!isValid && (
                <>
                    <div>
                        <p>To proceed, please pick an environment</p>
                        <button onClick={() => setEnvironment(Environment.TEST)}>Test</button>
                        <button onClick={() => setEnvironment(Environment.DEV)}>Dev</button>
                        <button onClick={() => setEnvironment(Environment.PREPROD)}>Preprod</button>
                        <button onClick={() => setEnvironment(Environment.PROD)}>Prod</button>
                    </div>
                </>
            )}
            {isValid && <Outlet />}
        </>
    );
};

export default Layout;
