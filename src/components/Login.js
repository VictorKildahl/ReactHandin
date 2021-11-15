import React, { useState } from "react";

// interface JWTObject {
//   Name: String;
//   Role: String;
//   UserId: Number;
//   nbf: Number;
//   exp: Number;
// }

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [jwtObject, setJwtObject] = useState();

  const login = async (username, password) => {
    console.log("username" + username);
    console.log("password" + password);

    fetch("https://afe2021fitness.azurewebsites.net/api/Users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((response) => {
      response.json();
      console.log("response" + response.jwt);

      var base64Url = response.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      setJwtObject(JSON.parse(jsonPayload));
    });
  };

  const decodeJwt = async () => {
    const response =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiTWFuYWdlciIsIlJvbGUiOiJNYW5hZ2VyIiwiVXNlcklkIjoiMSIsIm5iZiI6IjE2MzY5ODI4MDAiLCJleHAiOiIxNjM3MDY5MjAwIn0.p13_60lrgVHVonT37Oji9jZD9FQ0Awhzqyc6aNLA8Vo";
    var base64Url = response.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    setJwtObject(jsonPayload);

    console.log(jwtObject.Role);
  };

  return (
    <form>
      <label>
        Username
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
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
        value="Login"
        onClick={(event) => {
          event.preventDefault();
          //login(username, password);
          decodeJwt();
        }}
      />
    </form>
  );
}

export default Login;
