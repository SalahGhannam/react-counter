import './App.css'
import Counter from './Counter';
import { useState } from 'react';

function App(){

let [count,setCount]=useState(0);
const changeCounter = () => {
  setCount(count+1);
  console.log(count);
}
  return (
  <>
  <button onClick={changeCounter}> Salah Ghannam {count}</button>
  </>

  );
}

export default App
