import { useState } from "react";
import Textutils from "./Components/TextUtils";
import Alert from "./Components/alert";
function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      alertType: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const applyMode = () => {
    console.log("applyMode");
    if (mode === "light") {
      setMode("dark");
      showAlert("dark mode enabled", "success");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      showAlert("light mode enabled", "success");
      document.body.style.backgroundColor = "#f8f9fa";
    }
  };

  return (
    <>
      <Textutils modes={mode} applyModes={applyMode} showAlert={showAlert} />;
      {/* <Alert msg="HEllo" alertType="success" /> */}
      <Alert alert={alert} />
    </>
  );
}

export default App;
