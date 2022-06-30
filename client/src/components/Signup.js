import React, { useState, useContext } from "react";
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errorsList, setErrorsList] = useState([]);
    const { signup } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/signup', {
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

    return (
        <div>
            <form onSubmit={handleSubmit} className={'form'}>
                <label>Username:</label>
                <input 
                    type='text' 
                    id='username' 
                    value={username} 
                    onChange={e => setUsername(e.target.value)}
                /> <br/> <br/>
                <label>Password:</label>
                <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                /> <br/> <br/>
                <label>Confirm Password:</label>
                <input
                    type='password'
                    id='password_confirmation'
                    value={passwordConfirmation}
                    onChange={e => setPasswordConfirmation(e.target.value)}
                /> <br/> <br/>
                <button type='submit'>Create account</button>
                <br/>
                <ul style={{ color: 'red' }}>
                    {errorsList}
                </ul>
            </form>
        </div>
    );
}

export default Signup;