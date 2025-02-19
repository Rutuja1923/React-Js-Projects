import { useState, useEffect } from "react";
import axios from "axios";

function APIUserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show More Details"}
      </button>

      {showDetails && (
        <div>
          <h3>Address</h3>
          <p>{user.address.street}, {user.address.suite}</p>
          <p>{user.address.city} - {user.address.zipcode}</p>
          <p><strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>

          <h3>Company</h3>
          <p><strong>Name:</strong> {user.company.name}</p>
          <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
          <p><strong>Business:</strong> {user.company.bs}</p>
        </div>
      )}
    </div>
  );
}

export default APIUserProfile;
