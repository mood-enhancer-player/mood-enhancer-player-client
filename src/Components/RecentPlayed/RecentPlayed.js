import React, { useState } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import MusicCard from "../Common/Card/MusicCard";
import Loader from "../Common/Loader/Loader";
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
          </>
        )}
      </div>
    </>
  );
};

export default RecentPlayed;
