import PropTypes from "prop-types";
import { useState } from "react";

function UserProfile({ name, age, bio }) {
  const [showBio, setShowBio] = useState(false);

  const handleShowDetails = () => {
    setShowBio((prev) => !prev);
  };

  return (
    <div>
      <h2>{name}</h2>
      <h4>Age : {age}</h4>
      {showBio && <p>{bio}</p>}
      <button onClick={handleShowDetails}>
        {showBio ? "Hide Bio" : "Show Bio"}
      </button>
    </div>
  );
}

export default UserProfile;

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
};
