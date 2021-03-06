import React from 'react';
import { Link } from 'react-router-dom';

const SignupButton = () => {

    return (
        <Link to={'/signup'}>
            <button className={'button'}>Create new account</button>
        </Link>
    );
}

export default SignupButton;