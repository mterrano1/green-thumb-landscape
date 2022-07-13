import React, { useContext } from 'react'
import { UserContext } from './UserContext';
import EditReviewButton from './EditReviewButton';
import AddReviewButton from './AddReviewButton';
import DeleteReview from './DeleteReview';

const ReviewButton = ({ plantId, plant }) => {
    const {user} = useContext(UserContext);

    const filterReview = plant.reviews.filter(review => review.username === user.username)

    const displayButton = filterReview.length === 0 ? 
    <AddReviewButton plantId={plantId} /> : 
    <EditReviewButton plantId={plantId} userReview={filterReview[0]} />

    const deleteButton = filterReview.length === 0 ? '' : 
    <DeleteReview plantId={plantId} userReview={filterReview[0]} />


    return (
        <div>
            {displayButton}
            {deleteButton}
        </div>
    );
}

export default ReviewButton;