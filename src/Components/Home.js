import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import MusicCard from "./MusicCard";
import MusicPlayer from "./MusicPlayer";
import hasi from "../music/hasi.mp3";
import kabir from "../music/kabir.mp3";
import nayanne from "../music/nayanne.mp3";
import sanamre from "../music/sanamre.mp3";
import hasiImag from "../images/1.png";
import UpdatedCard from "./UpdatedCard";
import MUICard from "./MUICard";
const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  heading: {
    marginBottom: "10px",
    align: "left",
    fontStyle: "bold",
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
// Static Data
const audioLists = [
  {
    id: 1,
    cover: hasiImag,
    musicSrc: hasi,
    name: "shubham khunt",
    singer: "ankit",
  },
  {
    id: 2,
    cover: hasiImag,
    musicSrc: kabir,
    name: "kabir khunt",
    singer: "kabir",
  },
  {
    id: 3,
    cover: hasiImag,
    musicSrc: nayanne,
    name: "nayanne khunt",
    singer: "nayanne",
  },
  {
    id: 4,
    cover: hasiImag,
    musicSrc: sanamre,
    name: "sanam khunt",
    singer: "sanam",
  },
  {
    id: 5,
    cover: hasiImag,
    musicSrc: hasi,
    name: "shubham khunt",
    singer: "ankit",
  },
  {
    id: 6,
    cover: hasiImag,
    musicSrc: kabir,
    name: "kabir khunt",
    singer: "kabir",
  },
  {
    id: 7,
    cover: hasiImag,
    musicSrc: nayanne,
    name: "nayanne khunt",
    singer: "nayanne",
  },
  {
    id: 8,
    cover: hasiImag,
    musicSrc: sanamre,
    name: "sanam khunt",
    singer: "sanam",
  },
  {
    id: 9,
    cover: hasiImag,
    musicSrc: hasi,
    name: "shubham khunt",
    singer: "ankit",
  },
  {
    id: 10,
    cover: hasiImag,
    musicSrc: kabir,
    name: "kabir khunt",
    singer: "kabir",
  },
  {
    id: 11,
    cover: hasiImag,
    musicSrc: nayanne,
    name: "nayanne khunt",
    singer: "nayanne",
  },
  {
    id: 12,
    cover: hasiImag,
    musicSrc: sanamre,
    name: "sanam khunt",
    singer: "sanam",
  },
];

function Home() {
  const classes = useStyles();

  return (
    <>
      <div>
        <Typography variant="h5" className={classes.heading}>
          Top Trends
        </Typography>
        <div className={classes.root}>
          <Grid container spacing={3}>
            {audioLists.map((musicData) => {
              return <MusicCard musicData={musicData} key={musicData.id} />;
              // return <UpdatedCard/>
            })}
          </Grid>
        </div>
      </div>
      <MusicPlayer />
    </>
  );
}

export default Home;
