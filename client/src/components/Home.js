import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const Home = () => {
    const {user, loggedIn} = useContext(UserContext);

    if (loggedIn) {
        return (
            <div>
                <hr/>
                <h1>Hi {user.username}!</h1>
            </div>
        );
    } else {
        return (
            <div>
                <hr/>
                <h1>Green Thumb Landscape</h1>
            </div>
        )
    }
}

export default Home;