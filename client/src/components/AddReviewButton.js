import React from 'react'

import { Link } from 'react-router-dom';

const AddReviewButton = ({ plantId }) => {

    return (
        <Link to={`/plants/${plantId}/reviews/new`}>
            <button className={'button'}>Write review</button>
        </Link>
    );
}

export default AddReviewButton;