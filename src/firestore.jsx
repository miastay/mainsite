import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebaseConfig } from './firestore_key';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 

const firebaseConfig = getFirebaseConfig();

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function getAllCourses() {
    const querySnapshot = await getDocs(collection(db, "courses"));
    let courses = [];
    querySnapshot.forEach((doc) => {
        let data = doc.data()
        courses.push({'id': doc.id, 'data': data});
    });
    return courses;
}



