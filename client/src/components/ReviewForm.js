import React, { useState, useContext } from "react";
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

const ReviewForm = ({ review }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/reviews', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
        })
        .then(r => r.json())
        .then(user => {
            if (!user.errors) {
                signup(user)
                navigate('/')
            } else {
                setUsername('')
                setPassword('')
                setPasswordConfirmation('')
                const errors = user.errors.map(e => <li>{e}</li>)
                setErrorsList(errors)
            }
        });
    }

    // # reviews
    // # t.integer "green_thumb"
    // # t.integer "black_thumb"
    // # t.string "comment"
    // # t.boolean "like"
    // # t.boolean "planted"
    // # t.integer "plant_id"
    // # t.integer "user_id"

    return (
        <li>
            
        </li>
    )
}

export default ReviewForm;