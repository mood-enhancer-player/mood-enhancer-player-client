import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import hasi from "../music/hasi.mp3";
import kabir from "../music/kabir.mp3";
import nayanne from "../music/nayanne.mp3";
import sanamre from "../music/sanamre.mp3";
import hasiImag from "../images/1.png";

const audioLists = [
  {
    cover: "https://zxc21.s3.ap-south-1.amazonaws.com/a.jpeg",
    musicSrc: "https://zxc21.s3.ap-south-1.amazonaws.com/1.mpeg",
    name: "shubham khunt",
    singer: "ankit",
  },
  {
    cover: hasiImag,
    musicSrc: kabir,
    name: "kabir khunt",
    singer: "kabir",
  },
  {
    cover: hasiImag,
    musicSrc: nayanne,
    name: "nayanne khunt",
    singer: "nayanne",
  },
  {
    cover: hasiImag,
    musicSrc: sanamre,
    name: "sanam khunt",
    singer: "sanam",
  },
];

const MusicPlayer = ({
  musicInfoQuery,
  getSongByIdQuery,
  defaultSongIndex,
}) => {
  const index = musicInfoQuery.getAllSongs.findIndex((oneSong, index) => {
    console.log(oneSong, defaultSongIndex);
    if (String(oneSong._id) === getSongByIdQuery.getSongById._id) {
      return index;
    }
  });
  console.log(musicInfoQuery.getAllSongs);

  return (
    <div>
      <ReactJkMusicPlayer
        audioLists={musicInfoQuery.getAllSongs}
        // audioLists={audioLists}
        autoPlay={true}
        showPlayMode={false}
        mode="full"
        showDestroy={true}
        playIndex={index}
        onPlayIndexChange={(data) => console.log("Index changed", data)}
      />
    </div>
  );
};

export default MusicPlayer;
