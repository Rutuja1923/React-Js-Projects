import { useState } from "react";
import ButtonContainer from "../components/ButtonContainer";

function App() {
  const [bgColor, setBgColor] = useState("bg-zinc-950");

  const textColor = bgColor === "bg-white" ? "text-black" : "text-white";

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${bgColor} p-6 duration-300`}
    >
      <div className="fixed top-0 left-0 w-full text-center p-4 bg-opacity-80">
        <h1 className={`text-3xl font-bold mb-4 ${textColor}`}>
          Backgound Changer!
        </h1>
        <p className={`text-lg mb-6 ${textColor}`}>
          Click on buttons below to change background color!
        </p>
      </div>
      <ButtonContainer setBgColor={setBgColor} />
    </div>
  );
}

export default App;
