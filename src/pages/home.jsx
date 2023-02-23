import * as React from 'react';
import { useState } from 'react';
import {getWork, getProjects} from '../data';

const Home = () => {

    const [id, setId] = useState('');
    const [work, setWork] = useState(getWork());
    const [projects, setProjects] = useState(getProjects());

    return (
        <div>
            <h1>Mia Taylor</h1>
            <p>computational & systems biology student researcher</p>
            <p>frontend web dev</p>
            <p>machine learning engineer</p>
            <p>backend engineer</p>
            <hr/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{padding: '1rem'}}>
                    <h2>my work</h2>
                    {work && work.map((data, i) => {
                        return (
                            <div key={i}>
                                <strong>{data.title}</strong>
                                <ul>
                                    {data.desc.map((desc, i) => {
                                        return <li key={i}>{desc}</li>
                                    })}
                                    <br/><span>{`skills: ${data.skills.join(', ')}`}</span>
                                </ul>
                            </div>
                        )
                    })}
                </div>
                <div style={{padding: '1rem'}}>
                    <h2>my projects</h2>
                    {projects && projects.map((data, i) => {
                        return (
                            <div key={i}>
                                <strong><a href={data.href}>{data.title}</a></strong>
                                <ul>
                                    {data.desc.map((desc, i) => {
                                        return <li key={i}>{desc}</li>
                                    })}
                                    <br/><span>{`skills: ${data.skills.join(', ')}`}</span>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default Home;

