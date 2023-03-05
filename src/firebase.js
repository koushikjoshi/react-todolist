// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy9rUllp14Ray4zaQTdBPnATPzg0lRCcs",
  authDomain: "todo-app-yt-3fb25.firebaseapp.com",
  projectId: "todo-app-yt-3fb25",
  storageBucket: "todo-app-yt-3fb25.appspot.com",
  messagingSenderId: "818678989485",
  appId: "1:818678989485:web:69a2a54f82fc89fc747c24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
