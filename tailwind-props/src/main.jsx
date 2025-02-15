import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import Catcard from "../components/Catcard.jsx";

let myObj = {
  age: 5,
  favorite: "sea fish",
};
let myObj2 = {
  age: 2,
  favorite: "sweet corn",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Catcard
      name="Silky"
      someObj={myObj}
      imgSrc="https://cdn.pixabay.com/photo/2022/06/19/04/25/cat-7271017_1280.jpg"
    />
    <Catcard
      name="Maxxii"
      someObj={myObj2}
      imgSrc="https://cdn.pixabay.com/photo/2022/07/13/16/25/cat-7319589_1280.jpg"
    />
  </StrictMode>
);
