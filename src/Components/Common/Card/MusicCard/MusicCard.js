import React, { useState } from "react";
import {
  makeStyles,
  CardMedia,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  IconButton,
} from "@material-ui/core";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LikeSong from "./LikeSong/LikeSong";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  card: {
    width: "180px",
    height: "265px",
    padding: "15px",
    borderRadius: "10px",
    // background: theme.palette.primary.dark,
    background: theme.palette.grey[50],
    // backgroundColor: "#414345",
    // background: "linear-gradient(to right, red , yellow)",
    // boxShadow: "-11px 11px 31px #191919, 11px -11px 31px #292929",
    "&:hover": {
      background: theme.palette.primary.dark,
      // background: "#2a2b2c",
      transform: "translateY(-5px)",
      transition: "0.4s ease-out",
      cursor: "pointer",
    },

    [theme.breakpoints.down("md")]: {
      width: "150px",
      height: "210px",
    },
  },
  cardContent: {
    display: "row",
    alignItems: "left",
    background: "red",
    // textAlign: "left",
    // marginTop: "-7px",
    // marginLeft: "-15px",
    float: "left",
    // fontSize: "20px"
  },
  box: {
    // marginLeft:"10px",
    // marginRight:"10px",
    [theme.breakpoints.down("md")]: {
      width: "125px",
      height: "120px",
    },
  },
  media: {
    width: "150px",
    height: "155px",
    // marginTop:"15px",
    // marginLeft:"15px",
    // margin: "17px auto 17px",
    // padding:"17px",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      width: "120px",
      height: "125px",
    },

    // "&:hover": {
    // background: "green",
    // transform: "translateY(-5px)",
    // transition: "0.4s ease-out",
    // opacity: 0.8,
    // transform: "scale(1.2)",
    // background: "yellow",
    // zIndex: 100,
    // },
  },
  cardTitle: {
    fontSize: "1rem",

    // marginLeft: "auto",
    // marginRight: "auto",
    margin: "10px auto 3px",
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  artistName: {
    // marginLeft: "auto",
    // marginRight: "auto",
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  likeBtn: {
    position: "absolute",
    left: "0px",
    top: "0px",
    zIndex: "-1",
  },
}));

const MusicCard = ({ musicData, cardClickHandler }) => {
  const mouseEnterHandler = (songId) => {
    const target = document.getElementById(songId);
    target.src = require("./PlayBtnImg/playBtn.gif");
    // "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.F96l68IPT9EDibTxgK6bPQHaHS%26pid%3DApi&f=1";
    // "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.et9mAXq2jiTaYRG08fLjIwHaFj%26pid%3DApi&f=1";
    // "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-yLv4C2QuRP3SRELPcPySQAAAA%26pid%3DApi&f=1";
    // "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MXBLzWb8ZE_XMRPn_XDtEQHaHa%26pid%3DApi&f=1";
  };

  const mouseLeaveHandler = (songId) => {
    const target = document.getElementById(songId);
    target.src = musicData.cover;
  };

  // const likeSong = (songId) => {
  //   console.log("Liked song", songId);
  // };

  const classes = useStyles();
  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      lg={2}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Card
        className={classes.card}
        onClick={() => cardClickHandler(musicData._id)}
        onMouseEnter={() => mouseEnterHandler(musicData._id)}
        onMouseLeave={() => mouseLeaveHandler(musicData._id)}
      >
        <Box className={classes.box}>
          <CardMedia
            component="img"
            className={classes.media}
            image={musicData.cover}
            title={musicData.name}
            id={musicData._id}
          />
          {/* <CardContent className={classes.cardContent}> */}
          {/* <div className={classes.cardTitle}>
              {musicData.name.length > 16
                ? musicData.name.slice(0, 15) + "..."
                : musicData.name.slice(0, 16)}
            </div>
            <div className={classes.cardTitle}>{musicData.singer}</div>
            <div>
              <PlayCircleFilledWhiteIcon
                style={{
                  float: "right",
                  marginTop: "3px",
                  marginLeft: "3px",
                  background: "black",
                }}
              />
            </div> */}
          {/* <div>{musicData.name}</div>
            <div>{musicData.singer}</div>
            <div style={{ float: "right" }}>
              <PlayCircleFilledWhiteIcon />
            </div> */}

          <div className={classes.cardTitle}>
            {musicData.name.length > 16
              ? musicData.name.slice(0, 15) + "..."
              : musicData.name.slice(0, 16)}
          </div>
          <div>
            <p className={classes.artistName}>
              {musicData.singer.length > 16
                ? musicData.singer.slice(0, 11) + "..."
                : musicData.singer.slice(0, 13)}
            </p>
          </div>
          {/* <div
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => likeSong(musicData._id)}
          >
            <FavoriteBorderOutlinedIcon />
          </div> */}
          {/* </CardContent> */}
        </Box>
      </Card>
      <LikeSong id={musicData._id} />
      {/* <div
        style={{
          zIndex: "1000000",
          position: "absolute",
          marginLeft: "150px",
          marginTop: "150px",
          cursor: "pointer",
        }}
        onClick={() => console.log("Like runs")}
      >
        <FavoriteOutlinedIcon color="error" />
      </div> */}
    </Grid>
  );
};

export default MusicCard;
