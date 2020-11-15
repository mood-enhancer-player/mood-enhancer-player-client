import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import hasi from "../../../music/hasi.mp3";
import kabir from "../../../music/kabir.mp3";
import nayanne from "../../../music/nayanne.mp3";
import sanamre from "../../../music/sanamre.mp3";
import hasiImag from "../../../images/1.png";

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
  musicInfoQuery = 0,
  getRecentPlayQuery = 0,
  getSongByIdQuery = 0,
  songIdForBrowseTab = 0,
  songIdForRecentPlayedTab = 0,
  songIdForYourLibArtistTab = 0,
  songInfoForYourLibArtist = 0,
  as,
}) => {
  // const [autoPlay, setAutoPlay] = React.useState(false);
  console.log(songIdForYourLibArtistTab, songInfoForYourLibArtist);
  let index, audioList;
  switch (as) {
    case "Home":
      {
        index = musicInfoQuery.getAllSongs.findIndex((oneSong, index) => {
          if (String(oneSong._id) === getSongByIdQuery.getSongById._id) {
            return index;
          }
        });
        audioList = musicInfoQuery.getAllSongs;
      }
      break;
    case "Browse":
      {
        index = musicInfoQuery.getAllSongs.findIndex((oneSong, index) => {
          if (String(oneSong._id) === songIdForBrowseTab) return index;
        });
        audioList = musicInfoQuery.getAllSongs;
      }
      break;
    case "RecentPlayed":
      {
        index = getRecentPlayQuery.getRecentPlay.findIndex((oneSong, index) => {
          if (String(oneSong._id) === songIdForRecentPlayedTab) return index;
        });
        audioList = getRecentPlayQuery.getRecentPlay;
      }
      break;
    case "YourLibArtist":
      {
        index = songInfoForYourLibArtist.getSongsByArtist.findIndex(
          (oneSong, index) => {
            if (String(oneSong._id) === songIdForYourLibArtistTab) return index;
          }
        );
        audioList = songInfoForYourLibArtist.getSongsByArtist;
      }
      break;
    default:
      index = 0;
  }

  // if (getSongByIdQuery !== 0) {
  //   // For browse tab getSongByQuery = 0
  //   index = musicInfoQuery.getAllSongs.findIndex((oneSong, index) => {
  //     if (String(oneSong._id) === getSongByIdQuery.getSongById._id) {
  //       return index;
  //     }
  //   });
  // } else {
  //   index = musicInfoQuery.getAllSongs.findIndex((oneSong, index) => {
  //     if (String(oneSong._id) === songIdForBrowseTab) return index;
  //   });
  // }
  React.useEffect(() => {
    console.log(document.getElementsByClassName("music-player-audio")[0]);
    const musicPlayerAudio = document.getElementsByClassName(
      "music-player-audio"
    )[0];
    musicPlayerAudio.setAttribute("muted", "muted");
  }, []);
  // .setAttribute("muted", false);
  return (
    <>
      <ReactJkMusicPlayer
        audioLists={audioList}
        // audioLists={audioLists}
        autoPlay={false}
        showPlayMode={false}
        mode="full"
        showDestroy={false}
        showDownload={false}
        playIndex={index}
        // onAudioEnded={(end) => console.log("audio ended", end)}
        onPlayIndexChange={(data) => console.log("Index Changed", data)}
      />
    </>
  );
};

export default MusicPlayer;
