import React, { useContext, useState } from "react";
import { MenuItem, Menu, InputBase, Box, Typography } from "@material-ui/core";

import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import { AuthContext } from "../../../context/auth";

const drawerWidth = 240;
const useStyles = makeStyles(() => ({
  menuItemLink: {
    color: "white",
    textDecoration: "none",
  },
}));

const MenuForExistingUser = ({
  menuId,
  anchorEl,
  isMenuOpen,
  handleMenuClose,
}) => {
  // Render menu for existing users
  const classes = useStyles();

  const { user, logout } = useContext(AuthContext);

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
          My Account
          {/* {user} */}
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/login" className={classes.menuItemLink} onClick={logout}>
          Logout
        </Link>
      </MenuItem>
    </Menu>
  );
};

export default MenuForExistingUser;
