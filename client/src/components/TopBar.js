import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const TopBar = () => {
    const { loggedIn } = useContext(UserContext)

    const button = loggedIn ? <LogoutButton /> : <LoginButton />

    return (
        <div>
            {button}
        </div>
    )
}

export default TopBar;