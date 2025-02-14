import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  
  const addValue = () => {
    counter++;
    console.log(`Counter Value = ${counter} | Changed at ${new Date()}`);
    setCounter(counter);
  };
  const removeValue = () => {
    counter--;
    console.log(`Counter Value = ${counter} | Changed at ${new Date()}`);
    setCounter(counter);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}>Increase +</button>
      <button onClick={removeValue}>Decrease -</button>
    </>
  );
}

export default App;
