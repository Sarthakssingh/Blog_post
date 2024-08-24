import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';

import Login from './Components/Login'
import Register from "./Components/Register";
import Body from "./Components/Body";

function App() {
  return (
    <Router>
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Body />} />
            </Routes>
        </Router>
  );
}

export default App;
