import React, { useContext, useState } from "react";
import { MenuItem, Menu, InputBase, Box, Typography } from "@material-ui/core";

import { makeStyles, fade } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import { AuthContext } from "../../../context/auth";

const drawerWidth = 240;
const useStyles = makeStyles(() => ({
  menuItemLink: {
    color: "white",
    textDecoration: "none",
  },
}));

const MenuForNewUser = ({ menuId, anchorEl, isMenuOpen, handleMenuClose }) => {
  //Render menu for new users
  const classes = useStyles();

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/signup" className={classes.menuItemLink}>
          Sign Up
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/login" className={classes.menuItemLink}>
          Log In
        </Link>
      </MenuItem>
    </Menu>
  );
};

export default MenuForNewUser;
