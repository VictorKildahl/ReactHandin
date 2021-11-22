import React, { useEffect, useState } from "react";
import "./SeeWorkoutProgram.css";

function SeeWorkoutProgram() {
  const [workout, setWorkout] = useState();

  const SeeWOP = async () => {
    const resp = await fetch(
      "https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    );

    setWorkout(resp);
    console.log(resp);

    //   .then((response) => {
    //     response.json();
    //     setWorkout(response);
    //   })
    //   .then((resp) => {
    //     console.log(resp);
    //     console.log(workout.clientId);
    //   });
  };

  useEffect(() => {
    SeeWOP();
  }, []);

  return (
    <div>
      <h3>test</h3>
    </div>
  );
}

export default SeeWorkoutProgram;
//{workout ? workout[0].name : "hej"}
