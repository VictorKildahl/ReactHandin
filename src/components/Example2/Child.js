import React from "react";

function Child({ setName }) {
  return (
    <div>
      <button onClick={() => setName("Lars")}>Click me</button>
    </div>
  );
}

export default Child;
