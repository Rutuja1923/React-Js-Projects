import FontSizeControl from "./FontSizeControl";
import TextDisplay from "./TextDisplay";
import { useState } from "react";

function FontSizeApp() {
  const [fontSize, setFontSize] = useState(16);

  return (
    <div>
      <FontSizeControl fontSize={fontSize} setFontSize={setFontSize} />
      <TextDisplay fontSize={fontSize} />
    </div>
  );
}

export default FontSizeApp;
