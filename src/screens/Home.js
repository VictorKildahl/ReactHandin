import React from "react";
import { Link } from 'react-router-dom'
import AddExercise from "../components/AddExercise/AddExercise";
import CreatePersonalTrainer from "../components/CreatePersonalTrainer/CreatePersonalTrainer";
import CreateClients from "../components/PersonalTrainer/CreateClients";
import SeeWorkoutProgram from "../components/SeeWorkoutProgram/SeeWorkoutProgram";
import Client from "./Client";
import "./Home.css"

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
        <CreateClients />
        <br/>
        <Link to="/addExercise" className="button2">Add exercise</Link>
        <br/>
        <br/>
        <Link to="/seeClients" className="button2">See clients</Link>
        <SeeWorkoutProgram />;
      </div>
    );
  } else if (role === "Client") {
    return (
      <Client>
      </Client>
    );
  } else {
    return (
      <div>
        <h1>Welcome! You are not logged in yet...</h1>
      </div>
    );
  }
}

export default Home;
