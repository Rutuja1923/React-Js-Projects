import "./App.css";
import { useState} from "react";

function App() {
  let [counter, setCounter] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  
  const addValue = () => {
    if (counter >= 20) {
      setErrorMessage("Can't increase above 20");
      return;
    }
    setCounter(prevCounter => prevCounter + 1);
    setErrorMessage("");
    console.log(`Counter Value = ${counter} | Changed at ${new Date()}`); 
  };
  const removeValue = () => {
    if (counter <= 0) {
      setErrorMessage("Can't reduce below 0");
      return;
    }
    setCounter(prevCounter => prevCounter - 1);
    setErrorMessage("");
    console.log(`Counter Value = ${counter} | Changed at ${new Date()}`);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value : {counter} </h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button onClick={addValue}>Increase +</button>
      <button onClick={removeValue}>Decrease -</button>
    </>
  );
}

export default App;
