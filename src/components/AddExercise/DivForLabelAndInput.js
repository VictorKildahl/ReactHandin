import React from "react";
import "./DivForLabelAndInput.css";

function DivForLabelAndInput(props) {
  return (
    <div className="placing4">
      <label className="label">{props.text}</label>
      <input
        type={props.type}
        onChange={(event) => {
          props.function(event.target.value);
        }}
      />
    </div>
  );
}

export default DivForLabelAndInput;
