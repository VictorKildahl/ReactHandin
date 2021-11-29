import React from "react";
import "./WorkoutProgram.css";

function WorkoutProgram(props) {
  return (
    <div className="Placement">
      <div className="box">
        <p>ProgramId: {props.workoutProgramId}</p>
        <p>Name: {props.workoutName}</p>
        <p>Description: {props.workoutDescription}</p>
      </div>
    </div>
  );
}

export default WorkoutProgram;
