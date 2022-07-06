import React from 'react';
import Review from "./Review";

const Reviews = ({ plant }) => {


    return (
        <div>
            <ul>
                {plant.reviews.map((review) => (
                    <Review key={review.id} review={review} />
                ))}
            </ul>
        </div>
        
    )
}

export default Reviews;