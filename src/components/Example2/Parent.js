import React, { useState } from "react";
import Child from "../Example2/Child";

function Parent() {
  const [name, setName] = useState();

  return (
    <div>
      <Child setName={setName} />
      <p>{name}</p>
    </div>
  );
}

export default Parent;
