import React from "react";
import ClientPrograms from "../components/Client/ClientPrograms";

function Client() {
    var role = localStorage.getItem("Role");
  return (
    <div>
        <h1>Welcome {role}!</h1>
        <ClientPrograms></ClientPrograms>
    </div>
  );
}

export default Client;
