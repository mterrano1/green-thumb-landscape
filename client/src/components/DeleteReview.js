import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

const DeleteReview = ({ plantId, userReview }) => {
    const { handleDeleteReview, removeUserPlant } = useContext(UserContext);
    const navigate = useNavigate();

    const handleDelete = (e) => {
        e.preventDefault()
        fetch(`/plants/${plantId}/reviews/${userReview.id}`, {
            method: "DELETE",
        })
        .then((r) => {
            if (r.ok) {
                handleDeleteReview(userReview)
                removeUserPlant(plantId)
                navigate(`/plants/${plantId}`)
            }
        });
    }

    return (
            <button onClick={handleDelete} className={'button'}>Delete review</button>
    );
}

export default DeleteReview;