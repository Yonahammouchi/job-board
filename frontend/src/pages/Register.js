import { React, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [message, setMessage] = useState("message vide");

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:9000/api/auth/register', { "username": username, "email": email, "password": password })
            .then((res) => {
                setMessage('OK ! Veuillez vous connecter')
                console.log(res)
            }).catch((err) => {
                setMessage(`ERROR : ` + err)
                console.log(err)
            })
    };

    return (
        <>
            <h1>Page register</h1>
            <p>Veuillez rentrez toutes les données pour créer votre compte</p>
            <br />
            <p>Error message : <span style={{ color: 'red' }}>{message}</span></p>
            <br />
            <input type="text" placeholder='username' onChange={(event) => setUsername(event.target.value)} />
            <input type="text" placeholder='password' onChange={(event) => setPassword(event.target.value)} />
            <input type="text" placeholder='email' onChange={(event) => setEmail(event.target.value)} />
            <button onClick={handleSubmit}>Sign Up</button>
            <br />
            <br />
            <button onClick={() => navigate('/')}>Retourner sur la page de connexion</button>
        </>

    );
};

export default Register;