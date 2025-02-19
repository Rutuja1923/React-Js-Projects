function UserProfile() {
  const user = {
      name: "Aarav Mehta",
      age: 25,
      bio: "A software engineer passionate about building scalable web applications and exploring new technologies."
    };

return (
  <div>
      <h2>{user.name}</h2>
      <h4>{user.age}</h4>
      <p>
          <strong>Bio:&nbsp;</strong>
          {user.bio}
      </p>
  </div>
)
}

export default UserProfile

