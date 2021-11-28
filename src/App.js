import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import AddExercise from "./components/AddExercise/AddExercise";
import Login from "./components/Login";
import SeeListOfClients from "./components/SeeListOfClients/SeeListOfClients";
import Home from "./screens/Home";

function App() {
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
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addExercise" element={<AddExercise />} />
            <Route path="/seeClients" element={<SeeListOfClients />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
