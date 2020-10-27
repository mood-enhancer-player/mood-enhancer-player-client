import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import "./App.css";
import Register from "./Components/Register";

const App = () => {
  return (
    <>
      <Router>
        {/* <Dashboard /> */}
        <Register />
      </Router>
    </>
  );
};

export default App;
