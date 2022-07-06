import React, { useState, useContext } from "react";
import { UserContext } from './UserContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ReviewForm = () => {
    const { loggedIn, addReview } = useContext(UserContext);
    const { plant_id } = useParams();
    const navigate = useNavigate();
    const [comment, setComment] = useState('');
    const [like, setLike] = useState('1');
    const [errorsList, setErrorsList] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/reviews', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                comment,
                like: parseInt(like),
                plant_id: parseInt(plant_id)
            }),
        })
        .then(r => r.json())
        .then(data => {
            if (!data.errors) {
                addReview(data)
                navigate(`/plants/${plant_id}`)
            } else {
                setComment('')
                const errorsLis = data.errors.map(e => <li key={e.id}>{e}</li>)
                setErrorsList(errorsLis)
            }
        });
    }

    if (loggedIn) {
        return (
            <div>
                <form onSubmit={handleSubmit} className={'form'}>
                    Do you recommend this plant to others? <br/>
                    <select name='like' onChange={e => setLike(e.target.value)}> 
                        <option value={'1'}>Yes</option>
                        <option value={'0'}>No</option>
                        </select> <br/> <br/>
                    <label>Review</label>
                    <input 
                        type='text'
                        id='comment'
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    /> <br/> <br/>
                    <button type='submit'>Post review</button>
                    <ul>
                        {errorsList}
                    </ul>
                </form>
            </div>
        )
    } else {
        return (
            <h3>Please Login or Signup</h3>
        )
    }
}

export default ReviewForm;

{/* <div>
<form onSubmit={handleSubmit} className={'form'}>
    <label>Would you recommend this plant to a friend?</label>
    <input 
        type='text'
        id='like'
        value={like}
        onChange={e => setLike(e.target.value)}
    /> <br/> <br/>
    <label>Review</label>
    <input 
        type='text'
        id='comment'
        value={comment}
        onChange={e => setComment(e.target.value)}
    /> <br/> <br/>
    <button type='submit'>Post review</button>
</form>
</div> */}