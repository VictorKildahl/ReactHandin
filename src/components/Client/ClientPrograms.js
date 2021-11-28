import React, { useState, useEffect } from "react";
import DivForLabelAndInput from "../AddExercise/DivForLabelAndInput";
import InputButton from "../AddExercise/InputButton";
import WorkoutProgram from "../SeeWorkoutProgram/WorkoutProgram";

function ClientPrograms() {

    const [listOfPrograms, setListOfPrograms] = useState([]);
    const [clientID, setClientID] = useState();

    const typeText = "text";

    const inputDisplayText = "User ID: "

    const ButtonTypeSubmit = "submit";
    const ButtonValue = "See programs";

    const GetClientPrograms = async () => {
        await fetch(
        "https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms/client/" + clientID,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
          }
        ).then((response) => {
          response.json().then((data) => {
            setListOfPrograms(data);
          });
        });
      };

    const wods = listOfPrograms.map((item) => (
        <WorkoutProgram
          workoutProgramId={item.workoutProgramId}
          workoutName={item.name}
          workoutDescription={item.description}
        />
    ));

    return (
        <div className="clientContainer">
            <h2>Your Programs:</h2>
            <DivForLabelAndInput
            text={inputDisplayText}
            function={setClientID}
            type={typeText} />
            <InputButton
            type={ButtonTypeSubmit}
            value={ButtonValue}
            onClickFunction={GetClientPrograms}/>
            <h3>Workouts</h3>
            <div>{wods}</div>
        </div>
    );
}

export default ClientPrograms;