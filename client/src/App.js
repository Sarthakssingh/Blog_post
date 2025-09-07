import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';

import Login from './Components/Login'
import Register from "./Components/Register";
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <Router>
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<ProtectedRoute/>}/>
            </Routes>
        </Router>
  );
}

export default App;
