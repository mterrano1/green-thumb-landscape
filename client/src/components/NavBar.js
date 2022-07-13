import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/plants'>Plants</NavLink>
            <NavLink exact to='/landscape'>My landscape</NavLink>
        </nav>
    );
}

export default NavBar;