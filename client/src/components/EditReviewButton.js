import React, { useContext } from 'react'
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';

const EditReviewButton = ({ plantId }) => {
    const {user, loggedIn} = useContext(UserContext);

    return (
            <button className={'button'}>Edit review</button>
    );
}

export default EditReviewButton;