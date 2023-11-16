import { useState } from 'react';
import './App.css'

function App() {
  let [counter, ismailCounter] = useState(15)
  // let counter = 5;

  const addValue = () => {
    if (counter < 20) {
      ismailCounter(counter + 1);
    } else {
      alert("Your Couter VAlue is Greater then 20clear")
      console.log("addValueAdeded", Math.random());
    }
  }
  const removeValue = () => {
    if (counter > 0) {
      ismailCounter(counter - 1);
    }
    else {
      alert("Your Counter value is less then 0")
      console.log("Value remove", Math.random());
    }
  }
  return (
    <>

      <h1>Vite + React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
