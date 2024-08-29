import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleNavigate = () => {
        navigate('/register')
    }

    const handleCheckLogin = () => {
        alert("USERNAME : " + username + " and PASSWORD : " + password)
    }

    return (
        <>
            <div className='center_login'>
                <div className='flex_login'>

                    <h1>Page de connexion</h1>
                    <p>Veuillez vous connecter</p>
                    <input placeholder='username' onChange={(event) => setUsername(event.target.value)}></input>
                    <input placeholder='password' type='password' onChange={(event) => setPassword(event.target.value)}></input>
                    <button onClick={handleCheckLogin}>Se connecter</button>
                    <button onClick={handleNavigate}>S'enregistrer</button>

                </div>
            </div>
        </>
    );
};

export default Login;