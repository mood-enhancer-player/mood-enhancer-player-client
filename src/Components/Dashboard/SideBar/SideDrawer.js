import React, { useState } from "react";
import {
  Divider,
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

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Profile from "../../Common/Profile/Profile";

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
    </div>
  );
};

export default SideDrawer;
