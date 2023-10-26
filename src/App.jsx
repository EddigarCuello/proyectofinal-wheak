import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Lobby from "./Lobby.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/lobby" element={<Lobby/>} />
      </Routes>
    </Router>
  );
}

export default App;