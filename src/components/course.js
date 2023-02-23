import { useState, useEffect } from 'react';
import { getCourse } from '../firestore';

import './course.scss';

const Course = ({id}) => {

    const [data, setData] = useState("LOADING")

    useEffect(() => {
        async function grab() {
            setData(await getCourse(id));
        }
        grab();
    }, [])

    return (
        <div className={`course ${data.enrollable ? "open" : "closed"}`}>
            {data && 
                <div>
                    <div className={'title'}><strong>{data.code}</strong>&nbsp;&nbsp;{data.name}</div>
                    <div className={'detail'}>
                        <div className={'line1'}>
                            <div className={'spec'}>{`${data.discussion}${data.lab && `-${data.lab}`}`}</div>
                            
                        </div>
                        <div className={'line2'}>
                            <div className={`enrollment ${data.enrollable ? "open" : "closed"}`}>{`Status:`}&nbsp;<span>{data.enrollable ? "Open" : "Closed"}</span></div>
                            <div className={`buttons`}>
                                <button>View on Schedule of Classes</button>
                                <button className={data.enrollable ? "enrollable" : "disabled"} disabled={!data.enrollable}>Enroll&nbsp;&nbsp;{'>'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {!data && <p>{"error getting course"}</p>}
        </div>
    )
}

export default Course;
