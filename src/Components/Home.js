import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import MusicCard from "./MusicCard";
import SongList from "./SongList";
import Player from "./Player";
import BottomAppBar from "./BottomAppBar";
import AudioPlay from "./AudioPlay";
import JKMusic from "./JKMusic";
const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  card: {
    width: "150px",
    height: "190px",
  },
  media: {
    width: "120px",
    height: "120px",
  },
});

function Home() {
  const classes = useStyles();

  return (
    <>
      <div>
        <Typography
          variant="h5"
          // style={{ marginBottom: "10px", textAlign: "left", fontStyle: "bold" }}
        >
          Shows to try
        </Typography>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
          </Grid>
        </div>
      </div>
      <BottomAppBar />
    </>
  );
}

export default Home;
