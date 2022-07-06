import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const MyLandscape = () => {
    const {user, loggedIn} = useContext(UserContext);

    if (loggedIn) {
        return (
            <div>
                <hr/>
                <h2 class='capitalize'>{user.username}'s garden</h2>
                <h2 class='capitalize'>{user.username}'s reviews</h2>
            </div>
        );
    } else {
        return (
            <div>
                <h3>Please Login or Signup</h3>
            </div>
        )
    }
}

export default MyLandscape;