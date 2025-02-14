import './App.css';
import Chai from './Chai.jsx';

function welcome() {
  return "Welcome to React Learning!";
}

function App() {
  const mentorName = 'Hitesh Choudhary';
  const isLoggedIn = true;

  return (
    <>
      <h1>Chai aur React</h1>
      <p>{`By Our Mentor ${mentorName}`}</p>
      <p>{welcome()}</p>
      <p>{10 + 40}</p>
      <Chai />
      <p><p>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</p></p>
    </>
  )
}

export default App

/*
In JSX, an evaluated expression is anything that JavaScript can compute and return a value for. 
You can use JavaScript expressions inside {} in JSX, but not statements like if, for, or while.
*/
