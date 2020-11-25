import React, { useState } from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import {
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  FavoriteOutlined as FavoriteOutlinedIcon,
} from "@material-ui/icons";
import { gql, useMutation, useQuery } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  likeBtn: {
    zIndex: "1000000",
    position: "absolute",
    marginLeft: "115px", // 106
    marginTop: "210px", // 175
    cursor: "pointer",
  },
  likeBtnSize: {
    width: "26px",
    height: "26px",
  },
}));

const LikeSong = ({ id }) => {
  const classes = useStyles();
  const [like, setLike] = useState(false);

  // const { data, loading, error } = useQuery(GET_LIKE_SONGS_QUERY);
  // if (data) {
  //   console.log("likeData", data);
  // }

  const [addToLikeSong] = useMutation(ADD_TO_LIKE_SONGS_MUTATION, {
    onCompleted: (data) => console.log(data),
  });

  const likeSong = (songId) => {
    console.log("Liked song", songId);
    setLike(!like);
    addToLikeSong({
      variables: { songId },
    });
  };
  return (
    <div
      className={classes.likeBtn}
      onClick={() => console.log("Like runs")}
      onClick={() => likeSong(id)}
    >
      {like ? (
        <IconButton>
          <FavoriteOutlinedIcon color="error" className={classes.likeBtnSize} />
        </IconButton>
      ) : (
        <IconButton>
          <FavoriteBorderOutlinedIcon
            color="secondary"
            className={classes.likeBtnSize}
          />
        </IconButton>
      )}
    </div>
  );
};

const ADD_TO_LIKE_SONGS_MUTATION = gql`
  mutation addToLikeSongs($songId: ID!) {
    addToLikeSongs(songId: $songId)
  }
`;

const GET_LIKE_SONGS_QUERY = gql`
  query {
    getLikeSongs {
      _id
      name
      musicSrc
    }
  }
`;

export default LikeSong;
