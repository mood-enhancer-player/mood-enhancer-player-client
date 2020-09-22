import React from "react";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import AlbumIcon from '@material-ui/icons/Album';
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Avatar, Box, Typography } from "@material-ui/core";


const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <Box style={{margin:"auto"}}>
      <Box style={{ margin: "50px" }}>
      <Avatar alt="Remy Sharp" src="https://avatars2.githubusercontent.com/u/55044317?s=460&u=43e7c6167127bbeb2f91b564cdbdce32aeabd16e&v=4" style={{ marginRight: "auto", marginLeft: "auto", width: "100px", height: "100px" }} />
      <Typography style={{fontSize:"20px",marginRight: "auto", marginLeft: "auto",textAlign:"center"}}>Shubham Khunt</Typography>
      {/* <Typography>ShubhamKhunt@gmail.com</Typography> */}
      </Box>
      <Box className="side-menu" style={{marginLeft:"50px"}}>
      <Nav vertical className="list-unstyled pb-3">
        <NavItem style={{ margin: "10px" }}>
          <NavLink tag={Link} to={"/Home"} >
            <Box component="span" style={{ display: "flex" }}>
              <HomeOutlinedIcon fontSize="medium" cursor="pointer" style={{ fontSize: "30px" }} />
              <Typography style={{ fontSize: "20px", paddingLeft: "15px" }}>Home</Typography>
            </Box>
          </NavLink>
        </NavItem>
        <NavItem style={{ margin: "10px" }}>
          <NavLink tag={Link} to={"/browse"} style={{ display: "flex" }}>
            <Box component="span" style={{ display: "flex" }}>
              <LibraryBooksOutlinedIcon fontSize="large" cursor="pointer" style={{ fontSize: "30px" }} />
              <Typography style={{ fontSize: "20px", paddingLeft: "15px" }}>Browse</Typography>
            </Box>
          </NavLink>
        </NavItem>
        <NavItem style={{ margin: "10px" }}>
          <NavLink tag={Link} to={"/album"} style={{ display: "flex" }}>
            <Box component="span" style={{ display: "flex" }}>
              <AlbumIcon fontSize="large" cursor="pointer" style={{ fontSize: "30px" }} />
              <Typography style={{ fontSize: "20px", paddingLeft: "15px" }}>Album</Typography>
            </Box>
          </NavLink>
        </NavItem>
        <NavItem style={{ margin: "10px" }}>
          <NavLink tag={Link} to={"/artists"} style={{ display: "flex" }}>
            <Box component="span" style={{ display: "flex" }}>
              <PersonOutlineOutlinedIcon fontSize="large" cursor="pointer" style={{ fontSize: "30px" }} />
              <Typography style={{ fontSize: "20px", paddingLeft: "15px" }}>Artist</Typography>
            </Box>
          </NavLink>
        </NavItem>
        <NavItem style={{ margin: "10px" }}>
          <NavLink tag={Link} to={"/favourites"} style={{ display: "flex" }}>
            <Box component="span" style={{ display: "flex" }}>
              <VideocamOutlinedIcon fontSize="large" cursor="pointer" style={{ fontSize: "30px" }} />
              <Typography style={{ fontSize: "20px", paddingLeft: "15px" }}>Video</Typography>
            </Box>
          </NavLink>
        </NavItem>
      </Nav>
    </Box>
    </Box>
    </div>


    
);
export default SideBar;