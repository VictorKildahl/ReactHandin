import React, { useState } from "react";

function CreatePersonalTrainer() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const createPT = async () => {
    console.log("firstname" + firstname);
    console.log("lastname" + lastname);
    console.log("email" + email);
    console.log("password" + password);

    fetch("https://afe2021fitness.azurewebsites.net/api/Users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiTWFuYWdlciIsIlJvbGUiOiJNYW5hZ2VyIiwiVXNlcklkIjoiMSIsIm5iZiI6IjE2MzY5ODI4MDAiLCJleHAiOiIxNjM3MDY5MjAwIn0.p13_60lrgVHVonT37Oji9jZD9FQ0Awhzqyc6aNLA8Vo",
      },
      body: JSON.stringify({
        firstName: firstname,
        lastName: password,
        email: email,
        password: password,
        accountType: "PersonalTrainer",
      }),
    }).then((response) => {
      response.json();
    });
  };

  return (
    <form>
      <label>
        Firstname:
        <input
          type="text"
          onChange={(event) => {
            setFirstname(event.target.value);
          }}
        />
      </label>
      <label>
        Lastname:
        <input
          type="text"
          onChange={(event) => {
            setLastname(event.target.value);
          }}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </label>
      <input
        type="submit"
        value="Create Personal Trainer"
        onClick={(event) => {
          event.preventDefault();
          createPT();
        }}
      />
    </form>
  );
}

export default CreatePersonalTrainer;
