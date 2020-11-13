import React, { useState } from "react";
import {
  makeStyles,
  TableRow,
  TableCell,
  Button,
  IconButton,
} from "@material-ui/core";
import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import Loader from "./Loader";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import PauseCircleFilledOutlinedIcon from "@material-ui/icons/PauseCircleFilledOutlined";
import MusicPlayer from "./MusicPlayer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  loader: {
    backgroundColor: "white",
    marginTop: "250px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  table: {
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  container: {
    maxHeight: 800,
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  textAlign: {
    textAlign: "center",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  columTitleRow: {
    background: "black",
  },
  editBtn: {
    backgroundColor: "green",
    marginLeft: "15px",
    //   color:"green"
  },
  deleteBtn: {
    backgroundColor: "red",
    marginLeft: "15px",
  },
  coverImg: {
    width: "50px",
    height: "50px",
  },
}));

const ArtistWithSongListTableRow = ({
  name,
  singer,
  playCount,
  cover,
  index,
  songId,
  musicSrc,
  playButtonHandler,
}) => {
  const classes = useStyles();
  const [playIcon, setPlayIcon] = useState(true);
  // const { data, loading, error } = useQuery(GET_SONGS_BY_ARTISTS, {
  //   variables: {
  //     artistId,
  //   },
  // });

  const iconHandler = (songId) => {
    console.log("icon handle called", songId);
    setPlayIcon(!playIcon);
    console.log(document.getElementById(songId));
  };

  return (
    <>
      {/* {error && <h1>{`Songs Not Found ! ${error.message}`}</h1>} */}

      {/* {!data || loading ? (
        <Loader />
      ) : ( */}
      <TableRow hover>
        <TableCell className={classes.textAlign}>{index + 1}</TableCell>
        <TableCell className={classes.textAlign}>
          <img src={cover} alt="img" className={classes.coverImg} />
        </TableCell>
        <TableCell className={classes.textAlign}>{name}</TableCell>
        {/* <TableCell className={classes.textAlign}>{singer}</TableCell> */}
        <TableCell className={classes.textAlign}>{playCount}</TableCell>
        <TableCell
          className={classes.textAlign}
          onClick={() => iconHandler(songId)}
        >
          <IconButton
            aria-label="Play"
            onClick={() => playButtonHandler(songId)}
          >
            {playIcon ? (
              <PlayArrowRoundedIcon />
            ) : (
              <PauseCircleFilledOutlinedIcon />
            )}
            {/* <audio src={musicSrc} id={songId} /> */}
          </IconButton>
        </TableCell>
      </TableRow>
      {/* )} */}
    </>
  );
};

export default ArtistWithSongListTableRow;
