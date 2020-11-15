import React, { useState } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import MusicCard from "../Common/Card/MusicCard";
import MusicPlayer from "../Common/MusicPlayer/MusicPlayer";
import { useQuery, gql } from "@apollo/client";
import Loader from "../Common/Loader";
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

const RecentPlayed = ({ cardClickHandler, getRecentPlay }) => {
  const classes = useStyles();
  // const getRecentPlay = useQuery(RECENT_PLAYED_QUERY);

  // const [songIdState, setSongIdState] = useState("5f9e3c550a3f4933c4b0183f");
  // const cardClickHandler = (receiveSongId) => {
  //   setSongIdState(receiveSongId);
  //   console.log("card click");
  //   console.log("cardhandlercliekd", receiveSongId);
  // };

  return (
    <>
      <div>
        {getRecentPlay.error && (
          <h1>{`You Broken It ! ${getRecentPlay.error.message}`}</h1>
        )}
        {!getRecentPlay.data || getRecentPlay.loading ? (
          <Loader />
        ) : (
          <>
            <Typography variant="h5" className={classes.heading}>
              Recent Played
              {/* {songIdState} */}
            </Typography>
            <div className={classes.root}>
              <Grid container spacing={2}>
                {getRecentPlay.data.getRecentPlay.map((song) => {
                  return (
                    <MusicCard
                      musicData={song}
                      key={song._id}
                      cardClickHandler={cardClickHandler}
                    />
                  );
                })}
              </Grid>
            </div>
            {/* <MusicPlayer
              getRecentPlayQuery={getRecentPlay.data}
              songIdForRecentPlayedTab={songIdState}
              as="RecentPlayed"
            /> */}
          </>
        )}
      </div>
    </>
  );
};

// const RECENT_PLAYED_QUERY = gql`
//   query {
//     getRecentPlay {
//       _id
//       name
//       singer
//       musicSrc
//       cover
//     }
//   }
// `;

export default RecentPlayed;
