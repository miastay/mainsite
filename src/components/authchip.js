import { useState, useEffect } from 'react';
import { trySignIn } from '../firestore.js';


const AuthChip = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const [error, setError] = useState(null);

    const tryLogin = () => {
        setError(null);
        trySignIn(username, password).then((data) => {
            console.log(data)
            if(data === "password") { setError("Incorrect password."); return; }
        });
    }

    return (
        <div className={'authchip'}>
            {error && <p>{error}</p>}
            <input type="text" id="username_input" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" id="password_input" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => tryLogin()}>log in</button>
        </div>
    )
}

export default AuthChip;
