import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const { logout } = useContext(UserContext);
    const navigate = useNavigate();

    const logoutUser = () => {
        fetch('/logout', {
            method: "DELETE",
        })
        .then(() => {
            logout()
            navigate('/')
        })
    
    }

    return (
        <button onClick={logoutUser} >Logout</button>
    );
}

export default LogoutButton;