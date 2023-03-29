import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  let[state,setState]=useState(0);
  function count(){
    setState(++state)
  }
  return (
    <div className="App">
      {console.log(state)}
      <button onClick={count}>click me</button>
      <h2 style={{fontSize:`${state}px`,backgroundColor:state>=20 ? 'blue' : 'red'}}>{state}px</h2>
    </div>
  );
}

export default App;
