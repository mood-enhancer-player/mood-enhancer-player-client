import React, { useState } from "react";
import {
  makeStyles,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
  CircularProgress,
  Button,
  Typography,
  Paper,
  CardMedia,
} from "@material-ui/core";
import { useQuery, gql } from "@apollo/client";
import Loader from "./Loader";
import ArtistWithSongListTableRow from "./ArtistWithSongListTableRow";

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
  paper: {
    width: "auto",
    height: "400px",
    margin: "10px",
    background: "green",
  },
}));

const ArtistWithSongList = ({ artistId }) => {
  const classes = useStyles();
  const columTitleRow = ["Id", "Cover Image", "Title", "Artists", "Album Name"];

  console.log(artistId);
  const { data, loading, error } = useQuery(GET_ARTIST_BY_ID_QUERY, {
    variables: {
      artistId,
    },
  });
  const getSongsByArtist = useQuery(GET_SONGS_BY_ARTIST, {
    variables: {
      artistId,
    },
  });
  return (
    <div>
      {error && <h1>{`Something wents wrong ! ${error.message}`}</h1>}
      {!data || loading ? (
        <Loader />
      ) : (
        <TableContainer className={classes.container}>
          {/* <Paper elevation={3} className={classes.paper}> */}
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="400px"
            width="auto"
            image={data.getArtistById.singerProfileFile}
            title="Contemplative Reptile"
            className={classes.card}
          />
          <h1>{data.getArtistById.name}</h1>
          {/* </Paper> */}
          <Table className={classes.table}>
            {/* <TableHead>
      <TableRow>
        {columTitleRow.map((title) => (
          <TableCell
            key={title}
            className={`${classes.textAlign} ${classes.columTitleRow}`}
          >
            {title}
          </TableCell>
        ))}
      </TableRow>
    </TableHead> */}
            <TableBody>
              {getSongsByArtist.error && (
                <h1>{`Songs Not Found ! ${getSongsByArtist.error.message}`}</h1>
              )}

              {!getSongsByArtist.data || getSongsByArtist.loading ? (
                <Loader />
              ) : (
                getSongsByArtist.data.getSongsByArtist.map((song, index) => {
                  return (
                    <ArtistWithSongListTableRow
                      name={song.name}
                      singer={song.singer}
                      playCount={song.playCount}
                      cover={song.cover}
                      index={index}
                    />
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

const GET_ARTIST_BY_ID_QUERY = gql`
  query artistById($artistId: ID!) {
    getArtistById(artistId: $artistId) {
      _id
      name
      singerProfileFile
    }
  }
`;

const GET_SONGS_BY_ARTIST = gql`
  query getSongByArtist($artistId: ID!) {
    getSongsByArtist(artistId: $artistId) {
      _id
      name
      description
      singer
      album
      musicSrc
      playCount
      cover
    }
  }
`;

export default ArtistWithSongList;
