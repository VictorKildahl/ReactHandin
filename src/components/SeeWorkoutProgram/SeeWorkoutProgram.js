import React, { useEffect, useState } from "react";
import "./SeeWorkoutProgram.css";
import WorkoutProgram from "./WorkoutProgram.js";

function SeeWorkoutProgram() {
  const [workouts, setWorkouts] = useState([]);

  const SeeWOP = async () => {
    await fetch(
      "https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms",
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
        setWorkouts(data);
      });
    });
  };

  useEffect(() => {
    SeeWOP();
  }, []);

  // useEffect(() => {
  //   console.log(workouts);
  // }, [workouts]);

  const wods = workouts.map((item) => (
    <WorkoutProgram
      workoutProgramId={item.workoutProgramId}
      workoutName={item.name}
      workoutDescription={item.description}
    />
    // <div>
    //   <p>{item.workoutProgramId}</p>
    //   <p>{item.name}</p>
    //   <p>{item.description}</p>

    //   <p>{item.exercises.exerciseId}</p>
    //   <p>{item.exercises.name}</p>
    //   <p>{item.exercises.description}</p>
    //   <p>{item.exercises.sets}</p>
    //   <p>{item.exercises.repetitionsd}</p>
    //   <p>{item.exercises.personalTrainerId}</p>
    // </div>
  ));
  console.log(wods);
  return (
    <div>
      <h3>Workouts</h3>
      <div>{wods}</div>
    </div>
  );
}

export default SeeWorkoutProgram;
