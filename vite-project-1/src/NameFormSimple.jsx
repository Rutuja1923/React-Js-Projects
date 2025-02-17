import { useState } from "react";
import "./NameForm.css"; 

function NameFormSimple() {
  const [displayName, setDisplayName] = useState("");

  const handleNameDisplay = (event) => {
    event.preventDefault();
    const nameInput = event.target.elements["user-name"].value; 
    setDisplayName(nameInput);
    event.target.reset(); 
  };

  return (
    <>
      <form onSubmit={handleNameDisplay}>
        <input type="text" placeholder="Enter your name here..." id="user-name" />
        <button type="submit">Submit</button>
      </form>
      <h3>{displayName}</h3>
    </>
  );
}

export default NameFormSimple