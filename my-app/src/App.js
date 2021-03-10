import logo from './logo.svg';
import './App.css';
//import axios from 'axios'
import React from 'react';
//import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from "react-router-dom";


let history = useHistory();
const responseGoogle = (response) => {
  console.log(response);
  history.push('/home')
}
document.getElementById('googleButton')


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GoogleLogin
    clientId="468310613534-o7qku75fu0ps8q1oj8nrh4mrg9mo3a8r.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
        <p>
          
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
