import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./App.css";
import SignUp from "./Components/UserAuth/SignUp";
import Login from "./Components/UserAuth/Login";
import MyAccount from "./Components/MyAccount/MyAccount";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <AuthRoute exact path="/signup" component={SignUp} />
            <AuthRoute exact path="/login" component={Login} />
            <Route exact path="/myAccount" component={MyAccount} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
