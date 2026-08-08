// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore  } from "firebase/firestore";
import { doc, setDoc, getDoc } from "firebase/firestore";
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


const saveTodo = async (todo) => {
  let docId = localStorage.getItem("todoDocId");

  if (!docId) {
    docId = crypto.randomUUID();
    localStorage.setItem("todoDocId", docId);
  }

  const docRef = doc(db, "todos", docId);

  const snap = await getDoc(docRef);

  let todos = [];

  if (snap.exists()) {
    todos = snap.data().todos;
  }

  todos.push(todo);

  await setDoc(docRef, {
    todos: todos
  });
};

export{
    app,
    analytics,
    saveTodo
}


