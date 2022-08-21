import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  const [data, setData] = React.useState("");

  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_API_BASE_URL}/api/hello`;
    fetch(url)
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
