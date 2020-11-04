import React from "react";
import {
  makeStyles,
  CardMedia,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  card: {
    width: "185px",
    height: "265px",
    borderRadius: "10px",
    background: "linear-gradient(to right, red , yellow)",
    boxShadow: "-11px 11px 31px #191919, 11px -11px 31px #292929",
    "&:hover": {
      background: "black",
      transform: "translateY(-5px)",
      transition: "0.4s ease-out",
    },

    [theme.breakpoints.down("md")]: {
      width: "150px",
      height: "180px",
    },
  },
  cardContent: {
    display: "row",
    alignItems: "left",
    marginTop: "-12px",
    marginLeft: "-15px",
    // fontSize: "20px"
  },
  box: {
    marginLeft: "10px",
    marginRight: "10px",
    [theme.breakpoints.down("md")]: {
      // width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  media: {
    width: "155px",
    height: "155px",
    margin: "17px auto 17px",
    // padding:"17px",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      width: "100px",
      height: "100px",
    },

    "&:hover": {
      // background: "green",
      // transform: "translateY(-5px)",
      // transition: "0.4s ease-out",
      opacity: 0.6,
      // transform: "scale(1.2)",
      // background: "yellow",
      // zIndex: 100,
    },
  },
  cardTitle: {
    fontSize: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
}));

const MusicCard = ({ musicData, cardClickHandler }) => {
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
      >
        <Box className={classes.box}>
          <CardMedia
            component="img"
            className={classes.media}
            image={musicData.cover}
            title={musicData.name}
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardTitle}>
              {musicData.name}
            </Typography>
            {/* <IconButton color="secondary">
            <PlayCircleFilledWhiteIcon />
          </IconButton> */}
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default MusicCard;
