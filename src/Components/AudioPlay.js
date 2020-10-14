import React from "react";
import AudioPlayer from "material-ui-audio-player";
// // import src from "../music/hasi.mp3";

// import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core";

const AudioPlay = () => {
  const src = [
    {
      name: "hasi",
      titie: "1",
      artist: "shubhalo1",
      coverImg: "1",
      musicSrc: require("../music/hasi.mp3"),
    },
    {
      name: "kabir",
      titie: "Screenshot (119)",
      artist: "shubhalo2",
      coverImg: "Screenshot (119)",
      musicSrc: require("../music/kabir.mp3"),
    },
    {
      name: "nayanne",
      titie: "Screenshot (120)",
      artist: "shubhalo3",
      coverImg: "Screenshot (120)",
      musicSrc: require("../music/nayanne.mp3"),
    },
  ];

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <AudioPlayer
        elevation={1}
        width="70%"
        variation="default"
        spacing={3}
        download={true}
        autoplay={false}
        order="standart"
        preload="auto"
        loop={true}
        src={src[0].musicSrc}
      />
    </div>
  );
};

export default AudioPlay;
