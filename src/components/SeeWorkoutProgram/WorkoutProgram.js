import React from "react";

function WorkoutProgram(props) {
  return (
    <ul>
      <li>ProgramId {props.workoutProgramId}</li>
      <li>Name {props.workoutName}</li>
      <li>Description {props.workoutDescription}</li>
    </ul>
  );
}

export default WorkoutProgram;
