import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebaseConfig } from './firestore_key.js';
import { getFirestore } from "firebase/firestore";
import { collection, getDoc, getDocs, doc } from "firebase/firestore"; 
import sha256 from 'crypto-js/sha256';
var cookieCutter = require('cookie-cutter');

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

export async function getCourse(course_id) {
    const docRef = doc(db, "courses", course_id);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) return docSnap.data();
    return null;
}

function generateSha256Hex(input) {
    const hash = sha256(input);
    return hash.toString();
}

export async function isUsernameUnique({username}) {
    try {
        const docRef = doc(db, 'users', username);
        const docSnap = await getDoc(docRef);
        return !docSnap.exists();
    } catch(err) {
        console.log(err);
    }
    return false;
}

export function isSignedIn() {
    let session = cookieCutter.get('user-session');
    if(!session) {
        return false;
    }
    return JSON.parse(session);
}

export function signOut() {
    cookieCutter.set('user-session', '', {expires: new Date(0)});
    return !cookieCutter.get('user-session');
}

export async function trySignIn(username, password) {
    console.log(username, password)
    console.log(generateSha256Hex(password));
    try {
        const docRef = doc(db, 'users', username);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {

            // our username exists, now check if their password matches:

            if(generateSha256Hex(password) !== docSnap.data().passwordhash) {
                return "nomatch";
            }

            // the password matches -- set the environment user to this user
            // and return a good value

            const data = docSnap.data();
            cookieCutter.set("user-session", JSON.stringify(data));
            return data;

        } else {
            return "nomatch";
        }
    } catch(err) {
        console.log(err);
    }
}



