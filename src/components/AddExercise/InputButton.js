import React, { useState } from "react";

function InputButton(props) {

    return (
        <input
          className="button"
          type={props.type}
          value={props.value}
          onClick={(event) => {
            event.preventDefault();
            props.onClickFunction();
          }}
        />
    )
}

export default InputButton;