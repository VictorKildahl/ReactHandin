import React, { useState, useEffect } from "react";
import Collapsible from "react-collapsible";
import DivForLabelAndInput from "../AddExercise/DivForLabelAndInput";
import InputButton from "../AddExercise/InputButton";
import WorkoutProgram from "../SeeWorkoutProgram/WorkoutProgram";
import WorkoutProgramWithLink from "./WorkoutProgramWithLink";

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
        <ul>
          <li>Workout ID: {item.workoutProgramId}</li>
          <Collapsible trigger="See program">
          <ul>
            {item.exercises.map((sub) => (
              <ul>
                <li>Exercise ID: {sub.exerciseId}</li>
                <li>Name: {sub.name}</li>
                <li>Descriptioin: {sub.description}</li>
                <li>Sets: {sub.sets}</li>
                <li>Repetitions: {sub.repetitions}</li>
                <li>Time: {sub.time}</li>
              </ul>
            ))}
          </ul>
          </Collapsible>
        </ul>
    ));

    // const wods2 = listOfPrograms.map((item) => (
    //     <WorkoutProgramWithLink
    //       workoutProgramId={item.workoutProgramId}
    //       exercises={item.exerciseses}
    //     />
    // ));

    // if(listOfPrograms.length)
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