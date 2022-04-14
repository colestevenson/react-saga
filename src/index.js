import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
