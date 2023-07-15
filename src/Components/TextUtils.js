import React, { useState } from "react";
import logo from "./logo.png";

function TextUtils(props) {
  // states
  const [text, setText] = useState("");

  // setText
  const onchangeSetText = (e) => {
    setText(e.target.value);
    countNumberOfWords();
  };

  const converUpperCase = () => {
    setText(text.toUpperCase());
  };

  const converLowerCase = () => {
    setText(text.toLowerCase());
  };

  const clearTextArea = () => {
    if (window.confirm("Your are sure? to clear.")) setText("");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text).then(() => alert("copyed!"));
  };

  // for count number of words
  let counter = 0;
  const countNumberOfWords = () => {
    text.split(" ").forEach((e) => {
      e !== "" && ++counter;
    });
    console.log("counter: ", counter);
  };

  const removeExtraSpaces = () => {
    setText(text.replace(/  +/g, " "));
  };

  return (
    <>
      <nav className="navbar bg-dark-subtle">
        {/* =======================for Logo ======================== */}
        <div className="container mx-5" style={{ width: 150 }}>
          <img src={logo} alt="" width={40} />
          <h1 style={{ fontSize: 20, paddingTop: 6 }} className="text-dark">
            TextUtils
          </h1>
        </div>

        {/* for dark mode icon */}
        <div className="form-check form-switch    mx-5">
          <input
            className="form-check-input "
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.applyModes}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Light
          </label>
        </div>
      </nav>

      <div
        className={`d-flex justify-content-center flex-column  bg-${props.modes} `}
      >
        <textarea
          name="textspace"
          className={`m-4 bg-${props.modes} text-${
            props.modes === "light" ? "dark" : "light"
          }`}
          cols="100"
          rows="10"
          value={text}
          onChange={onchangeSetText}
        ></textarea>

        <div className="d-flex justify-content-center">
          <button className="m-3 btn btn-primary" onClick={converUpperCase}>
            Convert to UpperCase
          </button>
          <button className="m-3 btn btn-primary" onClick={converLowerCase}>
            Convert to LowerCase
          </button>
          <button className="m-3 btn btn-danger" onClick={clearTextArea}>
            clear
          </button>
          <button className="m-3 btn btn-success" onClick={copyText}>
            copy
          </button>
          <button className="m-3 btn btn-success" onClick={removeExtraSpaces}>
            Remove Extrra spaces
          </button>
        </div>

        <div
          className={`d-flex justify-content-center m-4 bg-${
            props.modes
          } text-${props.modes === "light" ? "dark" : "light"}`}
        >
          {/* =======================
           text.split(" ").forEach((e) => {
              e !== "" && ++counter;
         });
        console.log("counter: ", counter);
          ========================*/}
          total number of words is {/*  */}
          {text.split(" ").length}
          {/*  */} and characters is {text.length}
        </div>
      </div>
    </>
  );
}

export default TextUtils;
