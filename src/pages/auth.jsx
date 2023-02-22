import * as React from 'react';
import { useState } from 'react';
//import styles from '@/styles/Auth.module.css'

const Auth = ({authFunction}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div>
                <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder={"username"}></input>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder={"password"}></input>
                <button onClick={() => authFunction(username, password)}>log in</button>
            </div>
        </>
    )
}


export default Auth;

