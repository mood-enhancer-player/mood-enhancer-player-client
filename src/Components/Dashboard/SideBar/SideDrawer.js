import React, { useContext, useState } from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import {
  HomeOutlined as HomeIcon,
  SearchOutlined as SearchIcon,
  InfoOutlined as InfoIcon,
  MenuOutlined as MenuIcon,
  AlarmOutlined as AlarmIcon,
  AccountCircleOutlined as AccountCircle,
  FavoriteBorderOutlined as FavoriteBorderIcon,
} from "@material-ui/icons";

import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import { AuthContext } from "../../../context/auth";

import Profile from "../../Common/Profile/Profile";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  privacy: {
    marginTop: "150px",
    fontSize: "13px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      marginTop: "92px",
    },
  },
}));

const SideDrawer = ({ selectedMenuItem }) => {
  const classes = useStyles();
  const theme = useTheme();

  const itemList = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Browse",
      icon: <SearchIcon />,
    },
    {
      text: "Your Library",
      icon: <InfoIcon />,
    },
    {
      text: "Recent Played",
      icon: <AlarmIcon />,
    },
    {
      text: "Likes Songs",
      icon: <FavoriteBorderIcon />,
    },
  ];

  return (
    <div>
      <Profile />
      <Divider />
      <List>
        {itemList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={() => selectedMenuItem(text)}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <a>
        <center>
          <Typography
            // onClick={() => {
            //   setState("Privacy & Policy");
            // }}
            className={classes.privacy}
          >
            Privacy & Policy
          </Typography>
        </center>
      </a>
      {/* <Box className={classes.privacy}> */}
      {/* <List>
        {["Privacy", "Policy"].map((text,index) => (
          <ListItem button key={text} onClick={() => {setState(text)}}>
            <ListItemIcon>
              {
                index % 2 == 0 ? <InfoIcon /> : <PolicyIcon />
              }
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      </Box> */}
    </div>
  );
};

export default SideDrawer;
