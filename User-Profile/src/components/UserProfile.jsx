import PropTypes from "prop-types";

function UserProfile({ name, age, bio }) {
  return (
    <div>
      <h2>{name}</h2>
      <h4>{age}</h4>
      <p>
        <strong>Bio:&nbsp;</strong>
        {bio}
      </p>
    </div>
  );
}

export default UserProfile;

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
};
