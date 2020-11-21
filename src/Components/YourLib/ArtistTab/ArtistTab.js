import React, { useState } from "react";
import {
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { useQuery, gql } from "@apollo/client";

import TabCard from "../../Common/Card/TabCard";
import ArtistWithSongList from "./ArtistWithSongList";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    padding: "10px",
  },
  paper: {
    width: "200px",
    height: "200px",
    margin: "20px",
  },
}));

// const data = [
// {
//     id:1,
//     name:" Hasi Ban Gaye"
// },
// {
//     id:2,
//     name:" Hasi Ban Gaye"
// },
//   {
//     id: 3,
//     name: " Arijit Singh",
//   },
//   {
//     id: 4,
//     name: " Jubin Nautial",
//   },
//   {
//     id: 5,
//     name: "Justin Bieber",
//   },
//   {
//     id: 6,
//     name: "Mithoon",
//   },
//   {
//     id: 7,
//     name: " Neha Kakkar",
//   },
// ];

const ArtistTab = ({ yourLibCardClickHandler }) => {
  const classes = useStyles();
  const { loading, data, error } = useQuery(GET_ARTISTS_QUERY);

  return (
    <>
      {loading || !data ? (
        <CircularProgress />
      ) : (
        <div className={classes.root}>
          <Grid container spacing={2}>
            {data.getArtists.map(({ _id, name, singerProfileFile }) => {
              return (
                <TabCard
                  name={name}
                  picture={singerProfileFile}
                  id={_id}
                  key={_id}
                  yourLibCardClickHandler={yourLibCardClickHandler}
                />
              );
            })}
          </Grid>
        </div>
      )}
    </>
  );
};

const GET_ARTISTS_QUERY = gql`
  query {
    getArtists {
      _id
      name
      singerProfileFile
    }
  }
`;

export default ArtistTab;
