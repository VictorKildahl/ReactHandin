import React, { useState } from "react";
import Collapsible from "react-collapsible";
import DivForLabelAndInput from "../AddExercise/DivForLabelAndInput";
import InputButton from "../AddExercise/InputButton";
import "./ClientPrograms.css";

function ClientPrograms() {
  const [listOfPrograms, setListOfPrograms] = useState([]);
  const [clientID, setClientID] = useState();

  const typeText = "text";

  const inputDisplayText = "User ID: ";

  const ButtonTypeSubmit = "submit";
  const ButtonValue = "See programs";

  const GetClientPrograms = async () => {
    await fetch(
      "https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms/client/" +
        clientID,
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
    <div className="placing5">
      <div className="box">
        <p>Workout ID: {item.workoutProgramId}</p>
        <Collapsible trigger="See program">
          {item.exercises.map((sub) => (
            <div className="placing5">
              <div>
                <p>Exercise ID: {sub.exerciseId}</p>
                <p>Name: {sub.name}</p>
                <p>Descriptioin: {sub.description}</p>
                <p>Sets: {sub.sets}</p>
                <p>Repetitions: {sub.repetitions}</p>
                <p>Time: {sub.time}</p>
              </div>
            </div>
          ))}
        </Collapsible>
      </div>
    </div>
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
        type={typeText}
      />
      <InputButton
        type={ButtonTypeSubmit}
        value={ButtonValue}
        onClickFunction={GetClientPrograms}
      />
      <h3>Workouts</h3>
      <div>{wods}</div>
    </div>
  );
}

export default ClientPrograms;
