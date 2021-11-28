import React, { useState, useEffect } from "react";
import "./CreateProgram.css";

function GetWorkoutProgram() {
  const [ID, setID] = useState();
  const [workout, setWorkout] = useState();

  const GetWorkoutProgram = async () => {
    fetch(
      "https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms/" + ID,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          id: ID,
        }),
      }
    ).then((response) => {
      response.json().then((data) => {
        setWorkout(data);
      });
    });
  };

  useEffect(() => {
    GetWorkoutProgram();
    console.log(workout);
  }, [ID]);

  console.log(workout);

  return (
    <div className="createClients-Container">
      <div className="divForLabelAndInput">
        <label className="label">Indsæt Workout ID:</label>
        <input
          type="text"
          onChange={(event) => {
            setID(event.target.value);
          }}
        />
      </div>
      <input
        className="buttonWorkout"
        type="submit"
        value="Get Workout"
        onClick={(event) => {
          event.preventDefault();
          GetWorkoutProgram();
        }}
      />
    </div>
  );
}

export default GetWorkoutProgram;
