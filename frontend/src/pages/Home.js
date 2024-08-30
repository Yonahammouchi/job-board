import { React, useState } from 'react';
import axios from 'axios';

const Home = () => {

    const [data, setData] = useState([])

    const handleDisplayUsers = () => {
        axios.get('http://localhost:9000/api/auth/users')
            .then((res) => {
                setData(res.data)
                console.log(res)
            }).catch((err) => {
                alert(`ERROR : ` + err)
                console.log(err)
            })
    }

    return (
        <>
            <h1>Home Page</h1>
            <p>Vous êtes bien connecté</p>
            <br />
            <br />
            <br />
            <button onClick={handleDisplayUsers}>Afficher tous les utilisateurs de mon site</button>
            <br />
            <br />
            <br />

            <ul>
                {data.map(user => (
                    <li key={user._id}>
                        <br />
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <br />
                    </li>
                ))}
            </ul>

        </>
    );
};

export default Home;