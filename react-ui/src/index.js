import React from 'react';
import ReactDOM from 'react-dom';
import { AuthContextProvider } from './context/Auth/AuthContext';
import App from './App';
import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
