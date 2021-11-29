import React from "react";
import DivForLabelAndInput from "./DivForLabelAndInput";
import InputButton from "./InputButton";

function ExerciseInfo(props) {
  const typeNumber = "number";
  const typeText = "text";
  const ButtonTypeSubmit = "submit";
  const ButtonValue = "Add Exercise";
  const workoutProgramId = "Workout program Id: ";
  const exerciseName = "Exercise name: ";
  const exerciseDescription = "Exercise Description: ";
  const numberOfSets = "Number of sets: ";
  const numberOfRepetitions = "Number of repetitions: ";
  const time = "Time: ";

  return (
    <div>
      <DivForLabelAndInput
        text={workoutProgramId}
        function={props.setWorkoutProgramID}
        type={typeNumber}
      />
      <DivForLabelAndInput
        text={exerciseName}
        function={props.setExerciseName}
        type={typeText}
      />
      <DivForLabelAndInput
        text={exerciseDescription}
        function={props.setDescription}
        type={typeText}
      />
      <DivForLabelAndInput
        text={numberOfSets}
        function={props.setNumberOfSets}
        type={typeNumber}
      />
      <DivForLabelAndInput
        text={numberOfRepetitions}
        function={props.setRepetitions}
        type={typeNumber}
      />
      <DivForLabelAndInput
        text={time}
        function={props.setTime}
        type={typeNumber}
      />
      <InputButton
        type={ButtonTypeSubmit}
        value={ButtonValue}
        onClickFunction={props.addExercise}
      />
    </div>
  );
}

export default ExerciseInfo;
