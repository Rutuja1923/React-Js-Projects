import "./App.css";
import APIUserProfile from "./components/APiUserProfile";
// import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      {/* <UserProfile
        name={"Rutuja"}
        age={21}
        bio={
          "An open-minded and empathetic soul who values growth, kindness, and making meaningful connections in life."
        }
      /> */}
      <APIUserProfile />
    </>
  );
}

export default App;
