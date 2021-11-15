import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [jwt, setJwt] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiTWFuYWdlciIsIlJvbGUiOiJNYW5hZ2VyIiwiVXNlcklkIjoiMSIsIm5iZiI6IjE2MzY5Nzk5NTEiLCJleHAiOiIxNjM3MDY2MzUxIn0.02I0PIyISvH85lBFy15hfL2q4CPfPBkJEKKnkbNXvZU"
  );

  //   const login = async () => {
  //     console.log("username" + username);
  //     console.log("password" + password);

  //     const result = await axios({
  //       method: "post",
  //       url: "https://afe2021fitness.azurewebsites.net/api/Users/login",
  //       headers: {},
  //       data: {
  //         username: username,
  //         password: password,
  //       },
  //     });

  //     console.log(result.data);
  //     setJwt(result.data);
  //   };

  const login = async (username, password) => {
    console.log("username" + username);
    console.log("password" + password);

    fetch("https://afe2021fitness.azurewebsites.net/api/Users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "cors",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((response) => {
      response.json();
      console.log("response" + response.jwt);
    });
  };

  return (
    <form className="login-Container">
      <div className="divForLabelAndInput">
        <label className="label">Username:</label>
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>
      <div className="divForLabelAndInput">
        <label className="label">Password:</label>
        <input
          type="text"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div className="divForLabelAndInput">
        <input
          type="submit"
          value="Login"
          onClick={(event) => {
            event.preventDefault();
            login(username, password);
          }}
        />
      </div>
    </form>
  );
}

export default Login;
