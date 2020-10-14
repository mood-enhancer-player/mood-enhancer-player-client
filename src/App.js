import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import "./App.css";
import Song from "./Components/Song";
import AudioPlay from "./Components/AudioPlay";
import FinalPlayer from "./Components/FinalPlayer";
import { Grid } from "@material-ui/core";
import JKMusic from "./Components/JKMusic";
const App = () => {
  return (
    <>
      {/* <FinalPlayer /> */}
      {/* <AudioPlay /> */}
      <Song />
      {/* <Router> */}
      {/* <Dashboard /> */}
      {/* <Grid container direction="row" justify="center" alignItems="flex-end">
          <AudioPlay />
        </Grid> */}
      {/* </Router> */}
    </>
  );
};

export default App;
