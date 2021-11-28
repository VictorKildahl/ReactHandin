import React, { useState } from "react";

function FetchButton(props) {

    return (
        <input
          className="button"
          type={props.type}
          value={props.value}
          onClick={(event) => {
            event.preventDefault();
            props.onClickFunction(props.param);
          }}
        />
    )
}

export default FetchButton;