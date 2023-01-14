import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-3WrFdH8yR2-sKAJfqf94LMGBuqLKoJ4",
  authDomain: "ecommerce-eaba7.firebaseapp.com",
  projectId: "ecommerce-eaba7",
  storageBucket: "ecommerce-eaba7.appspot.com",
  messagingSenderId: "389733679250",
  appId: "1:389733679250:web:ae01a0358bf07eb74aa64b"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);