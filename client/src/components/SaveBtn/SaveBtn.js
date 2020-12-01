import React from "react";
import "./SaveBtn.css";

function SaveBtn(props) {
  return (
    <span className="save-btn" {...props} role="button" tabIndex="0">
      Add
    </span>
  );
}

export default SaveBtn;
