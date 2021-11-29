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

  const wods = workouts.map((item) => (
    <WorkoutProgram
      workoutProgramId={item.workoutProgramId}
      workoutName={item.name}
      workoutDescription={item.description}
    />
  ));

  return (
    <div>
      <h3>Workouts</h3>
      <div>{wods}</div>
    </div>
  );
}

export default SeeWorkoutProgram;
