// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
      apiKey: "AIzaSyDbwE7hFNe4eqDIOllJL99QUyHCxgzpS-o",
        authDomain: "datacoll-36cec.firebaseapp.com",
          databaseURL: "https://datacoll-36cec-default-rtdb.firebaseio.com",
            projectId: "datacoll-36cec",
              storageBucket: "datacoll-36cec.appspot.com",
                messagingSenderId: "1016604814091",
                 
                 
  };
 







// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
