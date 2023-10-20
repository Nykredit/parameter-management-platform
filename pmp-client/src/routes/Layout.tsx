import { Outlet, useParams } from 'react-router-dom';

const Layout = () => {
    const { enviroment } = useParams();

    return (
        <>
            <div className='bg-gray-500'>
                <p>App bar goes here</p>
                <p>Current enviroment: {enviroment ?? 'unset'}</p>
            </div>
            <Outlet />
        </>
    );
};

export default Layout;
