import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [jwt, setJwt] = useState();

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

  const login = async () => {
    console.log("username" + username);
    console.log("password" + password);

    const result = fetch(
      "https://afe2021fitness.azurewebsites.net/api/Users/login",
      {
        method: "POST",
        headers: {},
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );

    console.log(result.data);
    setJwt(result.data);
  };

  return (
    <form>
      <label>
        Username
        <input
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <input type="submit" value="Login" onClick={() => login()} />
    </form>
  );
}

export default Login;
