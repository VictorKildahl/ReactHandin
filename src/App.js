import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import AddExercise from "./components/AddExercise/AddExercise";
import ClientPrograms from "./components/Client/ClientPrograms";
import CreatePersonalTrainer from "./components/CreatePersonalTrainer/CreatePersonalTrainer";
import Login from "./components/Login";
import CreateClients from "./components/PersonalTrainer/CreateClients";
import CreateProgram from "./components/PersonalTrainer/CreateProgram";
import GetWorkoutProgram from "./components/PersonalTrainer/GetWorkoutProgram";
import SeeListOfClients from "./components/SeeListOfClients/SeeListOfClients";
import SeeWorkoutProgram from "./components/SeeWorkoutProgram/SeeWorkoutProgram";
import Home from "./screens/Home";

function App() {
  var role = localStorage.getItem("Role");

  if (role === "Manager") {
    return (
      <div>
        <Login />
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/createPersonalTrainer">
                    Create Personal Trainer
                  </Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/createPersonalTrainer"
                element={<CreatePersonalTrainer />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  } else if (role === "PersonalTrainer") {
    return (
      <div>
        <Login />
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/createClients">Create Clients</Link>
                </li>
                <li>
                  <Link to="/createWorkoutProgram">Create Workout Program</Link>
                </li>
                <li>
                  <Link to="/addExercise">Add Exercise</Link>
                </li>
                <li>
                  <Link to="/seeWorkoutProgram">See Workout Program</Link>
                </li>
                <li>
                  <Link to="/getWorkoutProgram">
                    Get Specific Workout Program
                  </Link>
                </li>
                <li>
                  <Link to="/seeClients">See Clients</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addExercise" element={<AddExercise />} />
              <Route path="/seeClients" element={<SeeListOfClients />} />
              <Route path="/createClients" element={<CreateClients />} />
              <Route
                path="/seeWorkoutProgram"
                element={<SeeWorkoutProgram />}
              />
              <Route path="/createWorkoutProgram" element={<CreateProgram />} />
              <Route
                path="/getWorkoutProgram"
                element={<GetWorkoutProgram />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  } else if (role === "Client") {
    return (
      <div>
        <Login />
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/seeClientPrograms">See Client Programs</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/seeClientPrograms" element={<ClientPrograms />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Welcome! You are not logged in yet...</h1>
      </div>
    );
  }
}

export default App;
