import { useState, useEffect } from 'react';
import Course from '../components/course';
import { isSignedIn } from '../firestore';


const UserCourses = ({children}) => {

    const [userData, setUserData] = useState(isSignedIn());

    return (
        <div className={'usercourses'}>
            {JSON.stringify(userData)}
            {userData && userData.courses.map((course, i) => {
                return <Course id={course} />
            })}
        </div>
    )
}

export default UserCourses;
