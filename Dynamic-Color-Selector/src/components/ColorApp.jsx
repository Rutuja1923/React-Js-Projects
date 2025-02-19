import { useState } from "react";
import ColorSelector from "./ColorSelector";
import ColorDisplay from "./ColorDisplay";

function ColorApp() {
  const [selectedColor, setSelectedColor] = useState("white");
  const colors = ["saddlebrown","magenta","aqua","blueviolet","olive","red","plum", "blue", "green", "yellow", "steelblue", "purple", "orange", "firebrick","palegreen", "hotpink "];

  return (
    <div>
      <h1>Dynamic Color Selector</h1>
      <ColorSelector colors={colors} onSelectColor={setSelectedColor} />
      <ColorDisplay color={selectedColor} />
    </div>
  );
}

export default ColorApp;
