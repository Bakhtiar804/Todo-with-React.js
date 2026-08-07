// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore , collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_pBmBtsuiNWtyVvo3QmrWp-sI2rmqJ_Q",
  authDomain: "e-commerce-bakhtiar.firebaseapp.com",
  projectId: "e-commerce-bakhtiar",
  storageBucket: "e-commerce-bakhtiar.firebasestorage.app",
  messagingSenderId: "53846360369",
  appId: "1:53846360369:web:9a67d948b6c0cb2b173010",
  measurementId: "G-RP1FLCLRBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = getFirestore(app);

const addtodoFirebase = async (todo , onClick) => {
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      text: todo
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export{
    app,
    analytics,
    addtodoFirebase
}

