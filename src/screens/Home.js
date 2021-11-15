import React from "react";
import CreatePersonalTrainer from "../components/CreatePersonalTrainer";
import CreateClients from "../components/PersonalTrainer/CreateClients";

function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <CreatePersonalTrainer />
      <h1>DETTE SKAL IND I HVER DERES SKÆRM UDFRA HVEM BRUGEREN ER</h1>
      <CreateClients />
    </div>
  );
}

export default Home;
