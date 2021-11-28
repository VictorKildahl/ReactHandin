import React, { useState } from "react";

function ExerciseInfo(props) {
    const introText = "Please fill out the exercise form";
     
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

        <div>
          <div className="divForLabelAndInput">
            <label className="label">Workout program Id:</label>
            <input
              type="number"
              onChange={(event) => {
                  props.setWorkoutProgramID(event.target.value);
              }}
            />
          </div>
          <div className="divForLabelAndInput">
            <label className="label">Exercise name:</label>
            <input
              type="text"
              onChange={(event) => {
                props.setExerciseName(event.target.value);
              }}
            />
          </div>
          <div className="divForLabelAndInput">
            <label className="label">Exercise description:</label>
            <input
              type="text"
              onChange={(event) => {
                props.setDescription(event.target.value);
              }}
            />
          </div>
          <div className="divForLabelAndInput">
            <label className="label">Number of sets:</label>
            <input
              type="number"
              onChange={(event) => {
                props.setNumberOfSets(event.target.value);
              }}
            />
          </div>
          <div className="divForLabelAndInput">
            <label className="label">Number repetitions:</label>
            <input
              type="number"
              onChange={(event) => {
                props.setRepetitions(event.target.value);
              }}
            />
          </div>
          <div className="divForLabelAndInput">
            <label className="label">Time:</label>
            <input
              type="number"
              onChange={(event) => {
                props.setTime(event.target.value);
              }}
            />
          </div>
          <input
            className="button"
            type="submit"
            value="Add exercise"
            onClick={(event) => {
              event.preventDefault();
              props.addExercise();
            }}
          />
        </div>
      );
}


export default ExerciseInfo;