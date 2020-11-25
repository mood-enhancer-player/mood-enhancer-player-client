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
    textAlign: "center",
    width: "185px",
    height: "230px",
    borderRadius: "10px",
    background: theme.palette.grey[50],

    // backgroundColor:"#A8CABA",
    // backgroundColor: "#414345",
    // background: "linear-gradient(to right,#000000, #2c3e50)",
    // boxShadow: "-11px 11px 31px #191919, 11px -11px 31px #292929",
    "&:hover": {
      // background: "black",
      background: theme.palette.primary.dark,

      transform: "translateY(-5px)",
      transition: "0.4s ease-out",
      cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
      width: "150px",
      height: "180px",
    },
  },
  cardContent: {
    display: "row",
    alignItems: "left",
    marginTop: "-18px",
    marginLeft: "-15px",
    // fontSize: "20px"
  },
  box: {
    marginLeft: "10px",
    marginRight: "10px",
    // [theme.breakpoints.down("md")]: {
    //   // width: "100%",
    //   marginLeft: "auto",
    //   marginRight: "auto"
    // },
  },
  media: {
    width: "145px",
    height: "145px",
    margin: "17px auto 17px",
    // padding:"17px",
    borderRadius: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100px",
      height: "100px",
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

const TabCard = ({ name, picture, id, yourLibCardClickHandler }) => {
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
        onClick={() => yourLibCardClickHandler(id)}
      >
        <Box className={classes.box}>
          <CardMedia
            component="img"
            className={classes.media}
            image={picture}
            title="Paella dish"
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardTitle}>{name}</Typography>
            {/* <IconButton color="secondary">
            <PlayCircleFilledWhiteIcon />
          </IconButton> */}
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default TabCard;