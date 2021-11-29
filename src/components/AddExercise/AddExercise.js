import React, { useState } from "react";
import ExerciseInfo from "./ExerciseInfo";

function AddExercise() {
  const [workoutProgramId, setWorkoutProgramId] = useState();
  const [exerciseName, setExerciseName] = useState();
  const [description, setDescription] = useState();
  const [NumberOfSets, setNumberOfSets] = useState();
  const [repetitions, setRepetitions] = useState();
  const [time, setTime] = useState();

  const addExercise = async () => {
    fetch(
      "https://afe2021fitness.azurewebsites.net/api/Exercises/Program/" +
        workoutProgramId,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          name: exerciseName,
          description: description,
          sets: NumberOfSets,
          repetitions: repetitions,
          time: time,
        }),
      }
    ).then((response) => {
      response.json();
    });
  };

  return (
    <ExerciseInfo
      setWorkoutProgramID={setWorkoutProgramId}
      setExerciseName={setExerciseName}
      setDescription={setDescription}
      setNumberOfSets={setNumberOfSets}
      setRepetitions={setRepetitions}
      setTime={setTime}
      addExercise={addExercise}
    />
  );
}

export default AddExercise;
