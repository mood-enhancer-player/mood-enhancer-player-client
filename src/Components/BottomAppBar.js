import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  InputBase,
  MenuItem,
  Grid,
  Menu,
} from "@material-ui/core";
import {
  HomeOutlined as HomeIcon,
  SearchOutlined as SearchIcon,
  InfoOutlined as InfoIcon,
  MenuOutlined as MenuIcon,
  MailOutline as MailIcon,
  AlarmOutlined as AlarmIcon,
  AccountCircleOutlined as AccountCircle,
  FavoriteBorderOutlined as FavoriteBorderIcon,
} from "@material-ui/icons";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Browse from "./Browse";
import Profile from "./Profile";
import AudioPlay from "./AudioPlay";
import JKMusic from "./JKMusic";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    top: "auto",
    bottom: 0,
    // marginBottom: "10px",
    background: "#212121",
    height: "100px",
  },
  grow: {
    flexGrow: 1,
  },
}));

function BottomAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <JKMusic />
    </div>
  );
}

BottomAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default withRouter(BottomAppBar);
