import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDolTo7QHUs1nph0PnUOD4OA1mOrmsqr9g",
  authDomain: "react-app-6c7b5.firebaseapp.com",
  projectId: "react-app-6c7b5",
  storageBucket: "react-app-6c7b5.firebasestorage.app",
  messagingSenderId: "41528287285",
  appId: "1:41528287285:web:f7c1f60de623045af9117c",
  measurementId: "G-0BCZLXV6YZ",
  databaseURL: "https://react-app-6c7b5-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);