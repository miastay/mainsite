import * as React from 'react';
//import styles from '@/styles/Home.module.css'
import Auth from './auth';
import { getAllCourses } from '../firestore';

function tryAuth(username, password) {
    console.log(`${username} entered ${password}`)
}

const Home = () => {

    return (
        <div>
            home page
            <button onClick={() => getAllCourses().then((data) => console.log(data))}></button>
            <Auth authFunction={tryAuth} />
        </div>
    )
}


export default Home;

