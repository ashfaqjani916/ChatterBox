// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf25jqpWMzaLQPQJrSCbl2h6qXHgWEVww",
  authDomain: "chatterbox-cb9d5.firebaseapp.com",
  projectId: "chatterbox-cb9d5",
  storageBucket: "chatterbox-cb9d5.appspot.com",
  messagingSenderId: "637452947703",
  appId: "1:637452947703:web:c1917d980b7095c9b243f2",
  measurementId: "G-9Z84GQXZP2"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);