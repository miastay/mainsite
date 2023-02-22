import * as React from 'react';
//import styles from '@/styles/Home.module.css'
import Auth from './auth';

function tryAuth(username, password) {
    console.log(`${username} entered ${password}`)
}

const Home = () => {

    return (
        <div>
            home page
            <Auth authFunction={tryAuth} />
        </div>
    )
}


export default Home;

