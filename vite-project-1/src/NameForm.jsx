import { useState } from "react";
import "./NameForm.css";
function NameForm() {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleNameDisplay = (event) => {
    event.preventDefault();
    setDisplayName(name);
  };

  const handleReset = () => {
    setName("");        
    setDisplayName(""); 
  };

  return (
    <>
      <form onSubmit={handleNameDisplay}>
        <input
          type="text"
          placeholder="Enter your name here..."
          id="user-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">submit</button>
        <button type="button" onClick={handleReset} className="reset-btn">Reset</button>
      </form>
      <h3>{displayName}</h3>
    </>
  );
}

export default NameForm;
