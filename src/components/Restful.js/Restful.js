import React, { useEffect } from "react";

function Restful() {
  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>Restful</div>;
}
export default Restful;
