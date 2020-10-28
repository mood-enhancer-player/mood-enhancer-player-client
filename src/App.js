import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import "./App.css";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
        {/* <Register /> */}
      </Router>
    </>
  );
};

export default App;
