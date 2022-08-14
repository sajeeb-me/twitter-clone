import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB8ba_AFMOm6VRrdGjdqOYWzCHeYGvm_SE",
    authDomain: "react-authentication-c5539.firebaseapp.com",
    projectId: "react-authentication-c5539",
    storageBucket: "react-authentication-c5539.appspot.com",
    messagingSenderId: "568916572656",
    appId: "1:568916572656:web:be2ae8111b61f461d44535",
    measurementId: "G-Q32R88Z3Q9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
