import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNavigate = () => {
        navigate('/register')
    }

    const handleCheckLogin = (e) => {
        e.preventDefault();

        axios.post('http://localhost:9000/api/auth/login', { "email": email, "password": password })
            .then((res) => {
                alert('OK !')
                console.log(res)
                navigate('/home')
            }).catch((err) => {
                alert(`ERROR : ` + err)
                console.log(err)
            })
    }

    return (
        <>
            <div className='center_login'>
                <div className='flex_login'>

                    <h1>Page de connexion</h1>
                    <p>Veuillez vous connecter</p>
                    <input placeholder='email' type='email' onChange={(event) => setEmail(event.target.value)}></input>
                    <input placeholder='password' type='password' onChange={(event) => setPassword(event.target.value)}></input>
                    <button onClick={handleCheckLogin}>Se connecter</button>
                    <button onClick={handleNavigate}>S'enregistrer</button>

                </div>
            </div>
        </>
    );
};

export default Login;