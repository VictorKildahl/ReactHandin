import React from "react";
import CreatePersonalTrainer from "../components/CreatePersonalTrainer/CreatePersonalTrainer";
import CreateClients from "../components/PersonalTrainer/CreateClients";
import SeeWorkoutProgram from "../components/SeeWorkoutProgram/SeeWorkoutProgram";

function Home() {
  var role = localStorage.getItem("Role");
  if (role === "Manager") {
    return (
      <div>
        <h1>Welcome {role}!</h1>
        <CreatePersonalTrainer />
      </div>
    );
  } else if (role === "PersonalTrainer") {
    return (
      <div>
        <h1>Welcome {role}!</h1>
        <CreateClients />;
        <SeeWorkoutProgram />;
      </div>
    );
  } else {
    return (
      <div>
        <h1>Welcome {role}!</h1>
        <h3>Der er ikke implementeret noget til clienten endnu</h3>
      </div>
    );
  }
}

export default Home;
