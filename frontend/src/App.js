import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  const [data, setData] = React.useState("");

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
        .then(response => response.text())
        .then(message => {
            setData(message);
            console.log("Message From API : " + message);
        });
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>{data}</h1>
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
