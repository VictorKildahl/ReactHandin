import jwt_decode from "jwt-decode";
import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [jwtObject, setJwtObject] = useState();

  const login = async (email, password) => {
    console.log("username" + email);
    console.log("password" + password);

    fetch("https://afe2021fitness.azurewebsites.net/api/Users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email, //"boss@fitness.moon",
        password: password, //"asdfQWER",
      }),
    })
      .then((response) => {
        response.json().then((data) => {
          localStorage.setItem("jwt", data.jwt);

          var decoded = jwt_decode(data.jwt);
          localStorage.setItem("Role", decoded.Role);
          // var role = localStorage.getItem("Role");
          // console.log(role);
        });
      })
      .then(() => window.location.reload());
  };

  return (
    <form className="login-Container">
      <div className="divForLabelAndInput">
        <label className="label">Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
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
            login(email, password);
            //decodeJwt();
          }}
        />
      </div>
    </form>
  );
}

export default Login;
