import React, { useState, useEffect } from "react";

function ClientPrograms() {

    const [listOfprograms, setListOfPrograms] = useState([]);
    const [clientID, setClientID] = useState();

    const GetClientPrograms = async () => {
        await fetch(
        "https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms/" + clientID,
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
            setListOfPrograms(data);
          });
        });
      };
    
      useEffect(() => {
        GetClientPrograms();
      }, []);


    return (
        <div>
            <h2>Your Programs:</h2>
        </div>
    );
}

export default ClientPrograms;

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