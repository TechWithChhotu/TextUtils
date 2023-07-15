import React from "react";
import "../index";
function alert(props) {
  return (
    props.alert && (
      <div className="alert alert-success" role="alert">
        {props.alert.alertType} : {props.alert.msg}
      </div>
    )
  );
}

export default alert;
