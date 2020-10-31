import React, { useState } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import MusicCard from "./MusicCard";
import MusicPlayer from "./MusicPlayer";
import hasi from "../music/hasi.mp3";
import kabir from "../music/kabir.mp3";
import nayanne from "../music/nayanne.mp3";
import sanamre from "../music/sanamre.mp3";
import hasiImag from "../images/1.png";
import { useQuery, gql } from "@apollo/client";
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
  const musicInfo = useQuery(MUSIC_INFO_QUERY);
  // console.log(data.getAllSongs[0]._id);
  // console.log(loading);
  // console.log(error);
  const [songIdState, setSongIdState] = useState("5f9d5f706591c1430cd74063");

  const getSongById = useQuery(GET_SONG_BY_ID_QUERY, {
    variables: {
      songId: songIdState,
    },
  });
  const cardClickHandler = (receiveSongId) => {
    setSongIdState(receiveSongId);
    console.log("card click");
    console.log("cardhandlercliekd", receiveSongId);
  };

  return (
    <>
      <div>
        {musicInfo.error && (
          <h1>{`You Broken It ! ${musicInfo.error.message}`}</h1>
        )}
        {!musicInfo.data ||
        musicInfo.loading ||
        !getSongById.data ||
        getSongById.loading ? (
          <CircularProgress />
        ) : (
          <>
            <Typography variant="h5" className={classes.heading}>
              Top Trends
              {songIdState}
            </Typography>
            <div className={classes.root}>
              <Grid container spacing={2}>
                {musicInfo.data.getAllSongs.map((musicData) => {
                  return (
                    <MusicCard
                      musicData={musicData}
                      key={musicData._id}
                      cardClickHandler={cardClickHandler}
                    />
                  );
                })}
              </Grid>
            </div>
            <MusicPlayer
              musicInfoQuery={musicInfo.data}
              getSongByIdQuery={getSongById.data}
              defaultSongIndex={songIdState}
            />
          </>
        )}
      </div>
    </>
  );
}

const MUSIC_INFO_QUERY = gql`
  query {
    getAllSongs {
      _id
      name
      description
      singer
      playCount
      cover
      musicSrc
    }
  }
`;

const GET_SONG_BY_ID_QUERY = gql`
  query songById($songId: ID!) {
    getSongById(songId: $songId) {
      _id
      name
      description
      singer
      musicSrc
      cover
    }
  }
`;

export default Home;
