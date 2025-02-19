import PropTypes from "prop-types";
import { useState } from "react";

function UserProfile({ name, age, bio }) {
  const [currBio, setBio] = useState("");
  const [btnText, setBtnText] = useState("Show Bio");

  const handleShowDetails = () => {
    setBtnText((prevText) => (prevText === "Show Bio" ? "Hide Bio" : "Show Bio"));
    setBio((prevBio) => (prevBio === "" ? bio : ""));
  };

  return (
    <div>
      <h2>{name}</h2>
      <h4>Age : {age}</h4>
      <p>{currBio}</p>
      <button onClick={handleShowDetails}>{btnText}</button>
    </div>
  );
}

export default UserProfile;

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
};