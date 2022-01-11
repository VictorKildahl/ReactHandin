import React from "react";
import Parent from "../components/Example2/Parent";
import GraphQL from "../components/GraphQL/GraphQL";
import "./Home.css";

function Home() {
  var role = localStorage.getItem("Role");
  if (role === "Manager" || role === "PersonalTrainer" || role === "Client") {
    return (
      <div className="placement">
        <h1>Welcome {role}!</h1>
        <Parent />
        <GraphQL />
      </div>
    );
  } else {
    return (
      <div className="placement">
        <h1>Welcome! You are not logged in yet...</h1>
      </div>
    );
  }
}

export default Home;
