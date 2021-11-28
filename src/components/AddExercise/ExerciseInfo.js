import React, { useState } from "react";
import DivForLabelAndInput from "./DivForLabelAndInput";
import InputButton from "./InputButton";

function ExerciseInfo(props) {
    const introText = "Please fill out the exercise form";
    
    const typeNumber = "number"
    const typeText = "text";

    const ButtonTypeSubmit = "submit";
    const ButtonValue = "Add Exercise";

    const workoutProgramId = "Workout program Id: ";
    const exerciseName = "Exercise name: ";
    const exerciseDescription = "Exercise Description: ";
    const numberOfSets = "Number of sets: ";
    const numberOfRepetitions = "Number of repetitions: ";
    const time = "time";
     
    return (
        // <form onSubmit={props.addExercise}>
        //     <p>{introText}</p>
        //     <label>Workout program Id:</label>
        //     <input
        //         type="number"
        //         onChange={(event) => {props.setWorkoutProgramID(event.target.value);}}
        //         />
        //     <br/>
        //     <br/>
        //     <label>
        //         Exercise name:
        //         <input
        //         type="text"
        //         onChange={(event) => {props.setExerciseName(event.target.value);}}
        //         />
        //     </label>
        //     <br/>
        //     <label>
        //         Exercise description:
        //         <input
        //         type="text"
        //         onChange={(event) => {props.setDescription(event.target.value);}}
        //         />
        //     </label>
        //     <br/>
        //     <label>
        //         Number of sets:
        //         <input
        //         type="number"
        //         onChange={(event) => {props.setNumberOfSets(event.target.value);}}
        //         />
        //     </label>
        //     <br/>
        //     <label>
        //         Number of repetitions:
        //         <input
        //         type="number"
        //         onChange={(event) => {props.setRepetitions(event.target.value);}}
        //         />
        //     </label>
        //     <br/>
        //     <label>
        //         Time:
        //         <input
        //         type="number"
        //         onChange={(event) => {props.setTime(event.target.value);}}
        //         />
        //     </label>
        //     <br/>
        //     <input type="submit" value="Submit" />
        // </form>

        // <div className="container">
        //   <DivForLabelAndInput
        //   text={workoutProgramId}
        //   function={props.setWorkoutProgramID}
        //   type={type_Number}></DivForLabelAndInput>
        //   {/* <div className="divForLabelAndInput">
        //     <label className="label">Workout program Id:</label>
        //     <input
        //       type="number"
        //       onChange={(event) => {
        //           props.setWorkoutProgramID(event.target.value);
        //       }}
        //     />
        //   </div> */}
        //   <div className="divForLabelAndInput">
        //     <label className="label">Exercise name:</label>
        //     <input
        //       type="text"
        //       onChange={(event) => {
        //         props.setExerciseName(event.target.value);
        //       }}
        //     />
        //   </div>
        //   <div className="divForLabelAndInput">
        //     <label className="label">Exercise description:</label>
        //     <input
        //       type="text"
        //       onChange={(event) => {
        //         props.setDescription(event.target.value);
        //       }}
        //     />
        //   </div>
        //   <div className="divForLabelAndInput">
        //     <label className="label">Number of sets:</label>
        //     <input
        //       type="number"
        //       onChange={(event) => {
        //         props.setNumberOfSets(event.target.value);
        //       }}
        //     />
        //   </div>
        //   <div className="divForLabelAndInput">
        //     <label className="label">Number repetitions:</label>
        //     <input
        //       type="number"
        //       onChange={(event) => {
        //         props.setRepetitions(event.target.value);
        //       }}
        //     />
        //   </div>
        //   <div className="divForLabelAndInput">
        //     <label className="label">Time:</label>
        //     <input
        //       type="number"
        //       onChange={(event) => {
        //         props.setTime(event.target.value);
        //       }}
        //     />
        //   </div>
        //   <input
        //     className="button"
        //     type="submit"
        //     value="Add exercise"
        //     onClick={(event) => {
        //       event.preventDefault();
        //       props.addExercise();
        //     }}
        //   />
        // </div>


        <div className="container">
          <DivForLabelAndInput
          text={workoutProgramId}
          function={props.setWorkoutProgramID}
          type={typeNumber} />
          <DivForLabelAndInput
          text={exerciseName}
          function={props.setExerciseName}
          type={typeText} />
          <DivForLabelAndInput
          text={exerciseDescription}
          function={props.setDescription}
          type={typeText} />
          <DivForLabelAndInput
          text={numberOfSets}
          function={props.setNumberOfSets}
          type={typeNumber} />
          <DivForLabelAndInput
          text={numberOfRepetitions}
          function={props.setRepetitions}
          type={typeNumber} />
          <DivForLabelAndInput
          text={time}
          function={props.setTime}
          type={typeNumber} />
          <InputButton
          type={ButtonTypeSubmit}
          value={ButtonValue}
          onClickFunction={props.addExercise}/>
      </div>
      );
}


export default ExerciseInfo;