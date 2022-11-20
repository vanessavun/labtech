import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyAyfAm811uwXI2d-c2qfQzwAWCDb6fWsMs",
  authDomain: "labtech-44e37.firebaseapp.com",
  projectId: "labtech-44e37",
  storageBucket: "labtech-44e37.appspot.com",
  messagingSenderId: "361742183271",
  appId: "1:361742183271:web:b5d63a35b771bb68da9dc2",
  measurementId: "G-CV0L2DL4KL"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
