import React from "react";
import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import TabCard from "../../Common/Card/TabCard";
import { useQuery, gql } from "@apollo/client";

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

const AlbumTab = () => {
  const classes = useStyles();
  const { loading, data, error } = useQuery(GET_ALBUM_QUERY);

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
