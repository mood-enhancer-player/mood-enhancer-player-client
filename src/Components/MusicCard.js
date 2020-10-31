import React from "react";
import {
  makeStyles,
  CardMedia,
  Grid,
  Typography,
  Card,
  CardContent,
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
  },
  cardContent: {
    display: "row",
    alignItems: "left",
    marginTop: "-12px",
    marginLeft: "-15px",
    // fontSize: "20px"
  },
  box: {
    margin: "12px 12px",
  },
  media: {
    width: "155px",
    height: "155px",
    margin: "17px auto 17px",
    // padding:"17px",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  cardTitle: {
    fontSize: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const cardClickHandler = (data) => {
  console.log("card click");
  console.log(data);
};

const MusicCard = ({ musicData }) => {
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
        onClick={() => cardClickHandler(musicData)}
      >
        <CardMedia
          component="img"
          className={classes.media}
          image={musicData.coverURL}
          title="Paella dish"
        />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.cardTitle}>
            {musicData.title}
          </Typography>
          {/* <IconButton color="secondary">
            <PlayCircleFilledWhiteIcon />
          </IconButton> */}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MusicCard;
