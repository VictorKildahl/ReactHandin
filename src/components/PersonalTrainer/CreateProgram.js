import React, { useState } from "react";
import "./CreateProgram.css";

function CreateProgram() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [exerciseName, setExerciseName] = useState();
  const [exerciseDescription, setExerciseDescription] = useState();
  const [exerciseSets, setExerciseSets] = useState();
  const [exerciseRepetitions, setExerciseRepetitions] = useState();
  const [exerciseTime, setExerciseTime] = useState();

  const createWorkoutProgram = async () => {
    fetch("https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        name: name,
        description: description,
        exercises: [
          {
            name: exerciseName,
            description: exerciseDescription,
            sets: exerciseSets,
            repetitions: exerciseRepetitions,
            time: exerciseTime,
          },
        ],
      }),
    }).then((response) => {
      response.json();
    });
  };

  return (
    <div className="createClients-Container">
      <div className="divForLabelAndInput">
        {/* <h3>Create a Client</h3> */}
        <label className="label">Workout:</label>
        <input
          //   className="input"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div className="divForLabelAndInput">
        <label className="label">Description:</label>
        <input
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </div>
      <div className="divForLabelAndInput">
        <label className="label">Exercise</label>
        <input
          type="text"
          onChange={(event) => {
            setExerciseName(event.target.value);
          }}
        />
      </div>
      <div className="divForLabelAndInput">
        <label className="label">Description:</label>
        <input
          type="text"
          onChange={(event) => {
            setExerciseDescription(event.target.value);
          }}
        />
      </div>
      <div className="divForLabelAndInput">
        <label className="label">Sets:</label>
        <input
          type="text"
          onChange={(event) => {
            setExerciseSets(event.target.value);
          }}
        />
      </div>
      <div className="divForLabelAndInput">
        <label className="label">Reps:</label>
        <input
          type="text"
          onChange={(event) => {
            setExerciseRepetitions(event.target.value);
          }}
        />
      </div>
      <div className="divForLabelAndInput">
        <label className="label">Time:</label>
        <input
          type="text"
          onChange={(event) => {
            setExerciseTime(event.target.value);
          }}
        />
      </div>
      <input
        className="buttonWorkout"
        type="submit"
        value="Create Workout"
        onClick={(event) => {
          event.preventDefault();
          createWorkoutProgram();
        }}
      />
    </div>
  );
}

export default CreateProgram;
