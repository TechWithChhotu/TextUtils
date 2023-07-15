import { useState } from "react";
import Textutils from "./Components/TextUtils";

function App() {
  const [mode, setMode] = useState("light");

  const applyMode = () => {
    console.log("applyMode");
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f8f9fa";
    }
  };

  return (
    <>
      <Textutils modes={mode} applyModes={applyMode} />;
    </>
  );
}

export default App;
