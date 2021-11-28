import React, { useState, useEffect } from "react";
import InputButton from "../AddExercise/InputButton";
import SeeWorkoutProgram from "../SeeWorkoutProgram/SeeWorkoutProgram";
import WorkoutProgram from "../SeeWorkoutProgram/WorkoutProgram";
import FetchButton from "./FetchButton";
import SingleProgram from "./SingleProgram";

function WorkoutProgramWithLink(props) {

    const ButtonValue = "See program";
    const ButtonTypeSubmit = "submit";

    const [program, setProgram] = useState();
    const [exercises, setExercises] = useState([]);


  return (
    <ul>
      <li>ProgramId {props.workoutProgramId}</li>
      <FetchButton
        type={ButtonTypeSubmit}
        value={ButtonValue}
        
        />
    </ul>
  );
}

export default WorkoutProgramWithLink;
