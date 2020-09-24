import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Dashboard />
        {/* <Switch>
          <Route exact from="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/browse"
            render={(props) => <Browse {...props} />}
          />
          <Route exact path="/about" render={(props) => <About {...props} />} />
        </Switch> */}
      </Router>
    </>
  );
};

export default App;