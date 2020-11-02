import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import "./App.css";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";
import SearchResult from "./Components/SearchResult";
import MusicPlayer from "./Components/MusicPlayer";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <AuthRoute exact path="/signup" component={SignUp} />
            <AuthRoute exact path="/login" component={Login} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
