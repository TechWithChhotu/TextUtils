import React, { useState } from "react";
import logo from "./logo.png";
import alert from "./alert";
function TextUtils(props) {
  // states
  const [text, setText] = useState("");

  // setText
  const onchangeSetText = (e) => {
    setText(e.target.value);
  };

  const converUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Text convered uppercase", "success");
  };

  const converLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Text convered lowercase", "success");
  };

  const clearTextArea = () => {
    if (window.confirm("Your are sure? to clear.")) setText("");
    // props.showAlert("Text copyed", "success");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text).then(() => alert("copyed!"));
    props.showAlert("Text copyed", "success");
  };

  const removeExtraSpaces = () => {
    setText(text.replace(/  +/g, " "));
    props.showAlert("Extra spaces removed", "success");
  };

  const Capitalize = () => {
    let wordsArray = text.split(" ");
    let first = "";
    let restof = "";
    wordsArray.forEach((e) => {
      first = e.charAt(0).toUpperCase();
      restof = e.slice(1).toLowerCase();
      wordsArray[wordsArray.indexOf(e)] = `${first}${restof}`;
    });

    let x = wordsArray.toString();
    console.log(x);
    let index = 0;
    wordsArray.forEach((e, i) => {
      index += e.length;
      console.log(x[index + i]);
      x = x.replace(",", " ");
    });
    setText(x);
    props.showAlert(`Capitalization done`, "success");
  };

  return (
    <>
      {props.alert}
      <nav className="navbar bg-dark-subtle ">
        {/* =======================for Logo ======================== */}
        <div className="container mx-4" style={{ width: 150 }}>
          <img src={logo} alt="" width={40} />
          <h1 style={{ fontSize: 20, paddingTop: 6 }} className="text-dark">
            TextUtils
          </h1>
        </div>

        {/* for dark mode icon */}
        <div className="form-check form-switch mx-4" style={{ width: 0 }}>
          <input
            className="form-check-input border border-primary "
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.applyModes}
          />
        </div>
      </nav>
      <div
        className={`d-flex mt-4 justify-content-center flex-column  bg-${props.modes} `}
      >
        <textarea
          name="textspace"
          className={`p-2 m-3  rounded bg-${props.modes} text-${
            props.modes === "light" ? "dark" : "light"
          }`}
          cols="100"
          rows="10"
          value={text}
          onChange={onchangeSetText}
        ></textarea>

        <div className="btns">
          <button className="m-1  btn btn-primary" onClick={converUpperCase}>
            UpperCase
          </button>
          <button className="m-1  btn btn-primary" onClick={converLowerCase}>
            LowerCase
          </button>

          <button className="m-1  btn btn-primary" onClick={Capitalize}>
            Capitalize
          </button>

          <button className="m-1  btn btn-danger" onClick={clearTextArea}>
            clear
          </button>
          <button className="m-1  btn btn-success" onClick={copyText}>
            copy
          </button>
          <button className="m-1  btn btn-success" onClick={removeExtraSpaces}>
            Remove Extrra spaces
          </button>
        </div>

        <div
          className={`d-flex justify-content-center m-4 bg-${
            props.modes
          } text-${props.modes === "light" ? "dark" : "light"}`}
        >
          total number of words is {/*  */}
          {
            text.split(" ").filter((e) => {
              return e.length !== 0;
            }).length
          }
          {/*  */} and characters is {text.length}
        </div>
      </div>
    </>
  );
}

export default TextUtils;
