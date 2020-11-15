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

const Browse = ({ search, cardClickHandler, musicInfo }) => {
  const classes = useStyles();
  // const musicInfo = useQuery(MUSIC_INFO_QUERY);

  // const [songIdState, setSongIdState] = useState("5f9e3c550a3f4933c4b0183f");
  // const cardClickHandler = (receiveSongId) => {
  //   setSongIdState(receiveSongId);
  //   console.log("card click");
  //   console.log("cardhandlercliekd", receiveSongId);
  // };

  let musicData = [];
  let capitalizeSearch = search.trim().replace(/\b\w/g, (c) => c.toUpperCase());
  const searchResult = () => {
    if (musicInfo.data) {
      musicInfo.data.getAllSongs.map((songData) => {
        if (
          songData.name.includes(capitalizeSearch) ||
          songData.singer.includes(capitalizeSearch)
        ) {
          musicData.push(songData);
        }
      });
    }
  };

  searchResult();

  return (
    <>
      <div>
        {musicInfo.error && (
          <h1>{`You Broken It ! ${musicInfo.error.message}`}</h1>
        )}
        {!musicInfo.data || musicInfo.loading ? (
          <Loader />
        ) : (
          <>
            <Typography variant="h5" className={classes.heading}>
              Top Trends
              {/* {songIdState} */}
            </Typography>
            <div className={classes.root}>
              <Grid container spacing={2}>
                {musicData.map((song) => {
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
              musicInfoQuery={musicInfo.data}
              songIdForBrowseTab={songIdState}
              as="Browse"
            /> */}
          </>
        )}
      </div>
    </>
  );
};

// const MUSIC_INFO_QUERY = gql`
//   query {
//     getAllSongs {
//       _id
//       name
//       description
//       singer
//       playCount
//       cover
//       musicSrc
//     }
//   }
// `;

export default Browse;