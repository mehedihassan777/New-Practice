import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
=======
import ReactDOM from 'react-dom';
>>>>>>> 9e3409b5b12870e9beb7698566b095cf528138c6
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
>>>>>>> 9e3409b5b12870e9beb7698566b095cf528138c6
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
