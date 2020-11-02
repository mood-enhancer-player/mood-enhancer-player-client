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
  // const [autoPlay, setAutoPlay] = React.useState(false);
  const index = musicInfoQuery.getAllSongs.findIndex((oneSong, index) => {
    if (String(oneSong._id) === getSongByIdQuery.getSongById._id) {
      return index;
    }
  });
  console.log(musicInfoQuery.getAllSongs);
  React.useEffect(() => {
    console.log(document.getElementsByClassName("music-player-audio")[0]);
    const musicPlayerAudio = document.getElementsByClassName(
      "music-player-audio"
    )[0];
    musicPlayerAudio.setAttribute("muted", "muted");
  }, []);
  // .setAttribute("muted", false);
  return (
    <div>
      <ReactJkMusicPlayer
        audioLists={musicInfoQuery.getAllSongs}
        // audioLists={audioLists}
        // autoPlay={true}
        showPlayMode={false}
        mode="full"
        showDestroy={true}
        showDownload={false}
        playIndex={index}
        // onAudioEnded={(end) => console.log("audio ended", end)}
        onPlayIndexChange={(data) => console.log("Index Changed", data)}
      />
    </div>
  );
};

export default MusicPlayer;
