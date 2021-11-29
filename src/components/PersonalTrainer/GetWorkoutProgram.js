import React, { useState } from "react";
import "./CreateProgram.css";

function GetWorkoutProgram() {
  const [ID, setID] = useState(101);
  const [workout, setWorkout] = useState([]);

  const GetWorkoutProgram = async () => {
    await fetch(
      "https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms/" + ID,
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
        setWorkout(data);
      });
    });
  };

  // useEffect(() => {
  //   supermetode();
  // }, [ID]);

  console.log(workout);
  console.log("id", ID);

  // const supermetode = () => (
  //   <div>
  //     <h3>Result:</h3>
  //     <div>Workout ID: {workout.workoutProgramId}</div>
  //     <div>name: {workout.name}</div>

  //     <div>
  //       <h3>{workout.name}</h3>
  //       <ul>
  //         {workout.exercises.map((sub) => (
  //           <ul>
  //             <li>{sub.exerciseId}</li>
  //             <li>Name: {sub.name}</li>
  //             <li>description: {sub.description}</li>
  //             <li>sets: {sub.sets}</li>
  //             <li>repetitions/time: {sub.repetitions}</li>
  //           </ul>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // );

  return (
    <div className="createClients-Container">
      <div>
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

      <h3>Result:</h3>
      <div>Workout ID: {workout.workoutProgramId}</div>
      <div>name: {workout.name}</div>

      <div>
        <h3>{workout.name}</h3>
        <ul>
          {workout.exercises.map((sub) => (
            <ul>
              <li>{sub.exerciseId}</li>
              <li>Name: {sub.name}</li>
              <li>description: {sub.description}</li>
              <li>sets: {sub.sets}</li>
              <li>repetitions/time: {sub.repetitions}</li>
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GetWorkoutProgram;
