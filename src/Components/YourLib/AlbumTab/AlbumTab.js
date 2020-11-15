import React from "react";
import {
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import TabCard from "../../Common/Card/TabCard";
import { useQuery, gql } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    display: "flex",
    padding: "10px",
  },
  paper: {
    width: "200px",
    height: "200px",
    margin: "20px",
  },
}));

const data = [
  // {
  //     id:1,
  //     name:" Hasi Ban Gaye"
  // },
  // {
  //     id:2,
  //     name:" Hasi Ban Gaye"
  // },
  {
    id: 3,
    name: "Rustom",
  },
  {
    id: 4,
    name: "IPL",
  },
  {
    id: 5,
    name: "Baghi3",
  },
];

const AlbumTab = () => {
  const classes = useStyles();
  const { loading, data, error } = useQuery(GET_ALBUM_QUERY);

  if (data) {
    console.log(data);
  }

  return (
    <>
      {loading || !data ? (
        <CircularProgress />
      ) : (
        <div className={classes.root}>
          <Grid container spacing={2}>
            {data.getAlbums.map(({ _id, album, cover }) => {
              return (
                <TabCard name={album} picture={cover} id={_id} key={_id} />
              );
            })}
          </Grid>
        </div>
      )}
    </>
  );
};

const GET_ALBUM_QUERY = gql`
  query {
    getAlbums {
      _id
      album
      cover
    }
  }
`;

export default AlbumTab;
