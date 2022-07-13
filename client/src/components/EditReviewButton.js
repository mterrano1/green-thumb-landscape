import React from "react";
import { Link } from 'react-router-dom';


const EditReviewButton = ({ plantId, userReview }) => {


    return (
        <Link to={`/plants/${plantId}/reviews/${userReview.id}`}>
            <button className={'button'}>Edit review</button>
        </Link>
    );
}

export default EditReviewButton;