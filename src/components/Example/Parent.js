import React, { useState } from "react";

function Parent() {
  const [name, setName] = useState();

  useEffect(() => {
    setName("Lars");
  }, []);

  return (
    <div>
      <Child name={name} />
    </div>
  );
}

export default Parent;
