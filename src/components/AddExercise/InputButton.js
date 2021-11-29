import React from "react";

function InputButton(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      onClick={(event) => {
        event.preventDefault();
        props.onClickFunction();
      }}
    />
  );
}

export default InputButton;
