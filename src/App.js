import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from "react-redux";
import { simpleAction } from "./actions/simpleAction";

function App() {
  const [data, setData] = useState(false);
  const message = useSelector(state => state.result);
  const dispatch = useDispatch();

useEffect(() => {
  const fetchData = async () => {
    const result = await fetch(
      `http://localhost:3001/`,
    );
    console.log('result', result)
    const response = await result.json()
    setData(response)
  }
  fetchData()
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message.result}</p>
        <p>{data.a}</p>
        <button onClick={() => dispatch(simpleAction())}>Test redux action</button>
      </header>
    </div>
  );
}

export default App;
