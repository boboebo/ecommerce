import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKfOdQi9qtF9KIkdVUGxVCfqds7CS9KH8",
  authDomain: "ecommerce-coder-27acf.firebaseapp.com",
  projectId: "ecommerce-coder-27acf",
  storageBucket: "ecommerce-coder-27acf.appspot.com",
  messagingSenderId: "508839675599",
  appId: "1:508839675599:web:b230cb281639543cd6d9ba",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
