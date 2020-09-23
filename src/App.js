import React from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Browse from "./Components/Browse";
import About from "./Components/About";
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
