import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from "react-redux";
import { simpleAction } from "./actions/simpleAction";

function App({ data }) {
  const message = useSelector(state => state.result);
  const dispatch = useDispatch();

  console.log('message', message)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message.result}</p>
        <button onClick={() => dispatch(simpleAction())}>Test redux action</button>
      </header>
    </div>
  );
}

export default App;
