import * as React from 'react';
//import styles from '@/styles/Home.module.css'
import Auth from './auth';
import { getAllCourses, getCourse, signOut } from '../firestore.js';
import { useState } from 'react';

function tryAuth(username, password) {
    console.log(`${username} entered ${password}`)
}

const Home = () => {

    const [id, setId] = useState('');

    return (
        <div>
            home page
            <button onClick={() => getAllCourses().then((data) => console.log(data))}>b</button>
            <input type="text" onChange={(e) => setId(e.target.value)}></input>
            <button onClick={() => getCourse(id).then((data) => console.log(data))}>aaa</button>
            <button onClick={() => signOut()}>signout</button>
        </div>
    )
}


export default Home;

