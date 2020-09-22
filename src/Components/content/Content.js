import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Topbar from "./TopBar";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      <Route exact path="/" component={() => "Hello"} />
      <Route exact path="/home" component={() => "Home"} />
      <Route exact path="/browse" component={() => "Browse"} />
      <Route exact path="/album" component={() => "Album"} />
      <Route exact path="/artists" component={() => "artists"} />
      <Route exact path="/favourites" component={() => "favourites"} />
    </Switch>
  </Container>
);

export default Content;