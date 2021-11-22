import React from "react";
import CreatePersonalTrainer from "../components/CreatePersonalTrainer/CreatePersonalTrainer";
import CreateClients from "../components/PersonalTrainer/CreateClients";
import SeeWorkoutProgram from "../components/SeeWorkoutProgram/SeeWorkoutProgram";

function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <CreatePersonalTrainer />
      <h1>DETTE SKAL IND I HVER DERES SKÆRM UDFRA HVEM BRUGEREN ER</h1>
      <CreateClients />
      <h1>DETTE SKAL IND I HVER DERES SKÆRM UDFRA HVEM BRUGEREN ER</h1>
      <SeeWorkoutProgram />
    </div>
  );
}

export default Home;
