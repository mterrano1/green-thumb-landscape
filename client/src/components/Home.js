import React, { useContext } from 'react'
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const {user, loggedIn} = useContext(UserContext);

    if (loggedIn) {
        return (
            <div>
                <hr/>
                <h1 className='capitalize'>{user.username}</h1>
                <h2>Welcome to Green Thumb Landscape! The best place to get help designing your next landscape project!</h2>
                <hr/>
                <Link to={`/plants`}>
                    <button>Start designing</button>
                </Link>
            </div>
        );
    } else {
        return (
            <div>
                <hr/>
                <h1>Green Thumb Landscape</h1>
                <hr/>
            </div>
        )
    }
}

export default Home;