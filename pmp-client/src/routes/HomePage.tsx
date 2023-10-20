import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <div>Home</div>
            <Link to='/signin'>Sign in</Link>
            <Link to='/signout'>Sign Out</Link>
        </>
    );
};

export default HomePage;
