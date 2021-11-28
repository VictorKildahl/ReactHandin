import React, { useState } from "react";

function DivForLabelAndInput(props) {

    return (
        <div className="divForLabelAndInput">
        <label className="label">{props.text}</label>
        <input
          type={props.type}
          onChange={(event) => {
              props.function(event.target.value);
          }}
        />
      </div>
    )
}

export default DivForLabelAndInput;