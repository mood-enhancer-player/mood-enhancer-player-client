import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import { gql, useMutation, useQuery } from "@apollo/client";

const LikeSong = ({ id }) => {
  console.log("render likessong", id);
  const [like, setLike] = useState(false);
  const [addToLikeSong, { data, loading, error }] = useMutation(
    ADD_TO_LIKE_SONGS_MUTATION,
    {
      onCompleted: (data) => console.log(data),
    }
  );

  const likeSong = (songId) => {
    console.log("Liked song", songId);
    setLike(!like);
    // addToLikeSong({
    //   variables: { songId },
    // });
  };
  return (
    <div
      style={{ float: "right", cursor: "pointer" }}
      onClick={() => likeSong(id)}
    >
      {like ? (
        <FavoriteOutlinedIcon color="error" />
      ) : (
        <FavoriteBorderOutlinedIcon color="secondary" />
      )}
    </div>
  );
};

const ADD_TO_LIKE_SONGS_MUTATION = gql`
  mutation addToLikeSongs($songId: ID!) {
    addToLikeSongs(songId: $songId)
  }
`;

export default LikeSong;
