import React, { useState } from "react";
import AddExercise from "../AddExercise/AddExercise";
import "./CreateClients.css";
import CreateProgram from "./CreateProgram";
import GetWorkoutProgram from "./GetWorkoutProgram";

function CreateClients() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const createClients = async () => {
    fetch("https://afe2021fitness.azurewebsites.net/api/Users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        accountType: "Client",
      }),
    }).then((response) => {
      response.json();
    });
  };

  return (
    <div className="createClients-Container">
      <div className="divForLabelAndInput">
        {/* <h3>Create a Client</h3> */}
        <label className="label">Firstname:</label>
        <input
          //   className="input"
          type="text"
          onChange={(event) => {
            setFirstname(event.target.value);
          }}
        />
      </div>
      <div className="divForLabelAndInput">
        <label className="label">Lastname:</label>
        <input
          type="text"
          onChange={(event) => {
            setLastname(event.target.value);
          }}
        />
      </div>
      <div className="divForLabelAndInput">
        <label className="label">Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="divForLabelAndInput">
        <label className="label">Password:</label>
        <input
          type="text"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <input
        className="button"
        type="submit"
        value="Create clients"
        onClick={(event) => {
          event.preventDefault();
          createClients();
        }}
      />
            <br/>
      <br/>
      <br/>
      <div>
        <CreateProgram></CreateProgram>
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        <GetWorkoutProgram></GetWorkoutProgram>
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        <AddExercise></AddExercise>
      </div>
    </div>
  );
}

export default CreateClients;
