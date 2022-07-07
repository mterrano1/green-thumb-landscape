import React, { useContext } from 'react'
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';
import EditReviewButton from './EditReviewButton';
import AddReviewButton from './AddReviewButton';

const ReviewButton = ({ plantId }) => {
    const {user} = useContext(UserContext);

    const filterPlant = user.reviews.filter(review => review.plant_id === plantId)

    const displayButton = filterPlant.length === 0 ? <AddReviewButton plantId={plantId} /> : <EditReviewButton />

    return (
        <div>
            {displayButton}
        </div>
    );
}

export default ReviewButton;