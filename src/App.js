import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState('');  // state to hold the returned data

  // function to initiate a GET request
  // https://docs.google.com/spreadsheets/d/e/2PACX-1vTvQcVwA_tdQ8QQZeXMNy2ncacRucxxDv5YNVo-xHa6qb2vyjqjAhqJUqGQncD-8hJ_0ICrDLXzQEm8/pub?output=csv
  const getData = () => {
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTvQcVwA_tdQ8QQZeXMNy2ncacRucxxDv5YNVo-xHa6qb2vyjqjAhqJUqGQncD-8hJ_0ICrDLXzQEm8/pub?output=csv";
    fetch(url)
      .then(response => response.text())
      .then(text => {
        console.log(text)
        setData(text)
      });
  }

  function csvToArray(csvString) {
    const lines = csvString.split('\n');  // Split the string into lines
    return lines.map(line => line.split(','));  // Split each line into fields and return the array of lines
  }

  return (
    <div className="App">
      <button onClick={getData}>Get Data</button>
      <br />
      <p>Column A: {data && csvToArray(data)[1][0]}</p>
      <a href="https://docs.google.com/spreadsheets/d/1rdttUCB0gfS8KXJ19wnUY_C0HL_PjNxjL_xBRsSDiSE/edit?usp=sharing" target='_blank'><button>Google Sheet</button></a>
    </div>
  );
}

export default App;
