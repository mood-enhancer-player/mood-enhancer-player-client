import React, { useContext, useState } from "react";
// import PropTypes from "prop-types";
import {
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
  MenuItem,
  Menu,
  InputBase,
  Box,
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
import { AuthContext } from "../../context/auth";
import { useQuery, gql } from "@apollo/client";
import Home from "../Home/Home";
import Browse from "../Browse/Browse";
import Profile from "../Common/Profile/Profile";
import PhotoTaker from "../Common/FaceCapture/PhotoTaker";
import YourLib from "../YourLib/YourLib";
import Privacy from "../Common/Privacy";
import RecentPlayed from "../RecentPlayed/RecentPlayed";
import MenuForNewUser from "./ProfileMenu/MenuForNewUser";
import MenuForExistingUser from "./ProfileMenu/MenuForExistingUser";
import HideDrawer from "./NavWithHiddenDrawer.js/HideDrawer";
import AppNavBar from "./AppBar/AppNavBar";
import MusicPlayer from "../Common/MusicPlayer/MusicPlayer";
import Loader from "../Common/Loader";

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
    zIndex: "1",
    background: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "black",
    zIndex: "1",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
      marginRight: 0,
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  privacy: {
    marginTop: "150px",
    fontSize: "13px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      marginTop: "92px",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  cameraPos: {
    marginLeft: 20,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
  menuItemLink: {
    color: "white",
    textDecoration: "none",
  },
}));

function Dashboard(props) {
  const { window } = props;
  const classes = useStyles();
  // const theme = useTheme();

  const { user, logout } = useContext(AuthContext);

  const musicInfo = useQuery(MUSIC_INFO_QUERY);
  const [songIdState, setSongIdState] = useState("5facdb3c754e8e12fc5a2568");

  const getSongById = useQuery(GET_SONG_BY_ID_QUERY, {
    variables: {
      songId: songIdState,
    },
  });

  const getRecentPlay = useQuery(RECENT_PLAYED_QUERY);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // const menuId = "primary-search-account-menu";
  //Render menu for new users
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     ={handleMenuClose}>
  //       <Link to="/signup" className={classes.menuItemLink}>
  //         Sign Up
  //       </Link>
  //     </MenuItem>
  //     ={handleMenuClose}>
  //       <Link to="/login" className={classes.menuItemLink}>
  //         Log In
  //       </Link>
  //     </MenuItem>
  //   </Menu>
  // );

  // Render menu for existing users
  // const renderMenu2 = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>
  //       <Link to="/signup" className={classes.menuItemLink}>
  //         My Account
  //         {/* {user} */}
  //       </Link>
  //     </MenuItem>
  //     <MenuItem onClick={handleMenuClose}>
  //       <Link to="/login" className={classes.menuItemLink} onClick={logout}>
  //         Logout
  //       </Link>
  //     </MenuItem>{" "}
  //   </Menu>
  // );

  // State For Menu Switching
  const [state, setState] = React.useState("Home");
  const selectedMenuItem = (selectedTab) => {
    setState(selectedTab);
  };

  // const itemList = [
  //   {
  //     text: "Home",
  //     icon: <HomeIcon />,
  //     onClick: () => {
  //       setState("Home");
  //       // history.push("/home");
  //     },
  //   },
  //   {
  //     text: "Browse",
  //     icon: <SearchIcon />,
  //     onClick: () => {
  //       setState("Browse");
  //       // history.push("/browse");
  //     },
  //   },
  //   {
  //     text: "Your Library",
  //     icon: <InfoIcon />,
  //     onClick: () => {
  //       setState("YourLibrary");
  //       // history.push("/YourLibrary");
  //     },
  //   },
  //   {
  //     text: "Recent Played",
  //     icon: <AlarmIcon />,
  //     onClick: () => {
  //       setState("RecentPlayed");
  //       // history.push("/YourLibrary");
  //     },
  //   },
  //   {
  //     text: "Likes Songs",
  //     icon: <FavoriteBorderIcon />,
  //     onClick: () => {
  //       setState("LikesSongs");
  //       // history.push("/YourLibrary");
  //     },
  //   },
  // ];

  // const drawer = (
  //   <div>
  //     <Profile />
  //     <Divider />
  //     <List>
  //       {itemList.map((item, index) => {
  //         const { text, icon, onClick } = item;
  //         return (
  //           <ListItem button key={text} onClick={onClick}>
  //             {icon && <ListItemIcon>{icon}</ListItemIcon>}
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         );
  //       })}
  //     </List>
  //     <a>
  //       <center>
  //         <Typography
  //           onClick={() => {
  //             setState("Privacy & Policy");
  //           }}
  //           className={classes.privacy}
  //         >
  //           Privacy & Policy
  //         </Typography>
  //       </center>
  //     </a>
  //     {/* <Box className={classes.privacy}> */}
  //     {/* <List>
  //       {["Privacy", "Policy"].map((text,index) => (
  //         <ListItem button key={text} onClick={() => {setState(text)}}>
  //           <ListItemIcon>
  //             {
  //               index % 2 == 0 ? <InfoIcon /> : <PolicyIcon />
  //             }
  //           </ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //     </Box> */}
  //   </div>
  // );

  // Song Card Click Handler
  const cardClickHandler = (receiveSongId) => {
    setSongIdState(receiveSongId);
    console.log("card click");
    console.log("cardhandlercliekd", receiveSongId);
  };

  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const menuId = "primary-search-account-menu";

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppNavBar
        menuId={menuId}
        state={state}
        handleDrawerToggle={handleDrawerToggle}
        handleSearch={handleSearch}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          search start
          {state === "Browse" ? (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Songs ..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearch}
              />
            </div>
          ) : null}
          search end
          <PhotoTaker />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar> */}
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}

      {user ? (
        <MenuForExistingUser
          menuId={menuId}
          anchorEl={anchorEl}
          isMenuOpen={isMenuOpen}
          handleMenuClose={handleMenuClose}
        />
      ) : (
        <MenuForNewUser
          menuId={menuId}
          anchorEl={anchorEl}
          isMenuOpen={isMenuOpen}
          handleMenuClose={handleMenuClose}
        />
      )}

      <HideDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        // itemList={itemList}
        selectedMenuItem={selectedMenuItem}
      />
      {/* <nav className={classes.drawer} aria-label="mailbox folders"> 
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav> */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {musicInfo.error && getRecentPlay.error && (
          <h1>{`You Broken It ! ${musicInfo.error.message}`}</h1>
        )}
        {!musicInfo.data ||
        musicInfo.loading ||
        !getSongById.data ||
        getSongById.loading ||
        !getRecentPlay.data ||
        getRecentPlay.loading ? (
          <Loader />
        ) : (
          <>
            {state === "Home" && (
              <Home cardClickHandler={cardClickHandler} musicInfo={musicInfo} />
            )}
            {state === "Browse" && (
              <Browse
                search={search}
                cardClickHandler={cardClickHandler}
                musicInfo={musicInfo}
              />
            )}
            {state === "Your Library" && <YourLib />}
            {state === "Recent Played" && (
              <RecentPlayed
                cardClickHandler={cardClickHandler}
                getRecentPlay={getRecentPlay}
              />
            )}
            {state === "Privacy & Policy" && <Privacy />}
            {state !== "Your Library" && (
              <MusicPlayer
                // For Home tab
                musicInfoQuery={musicInfo.data}
                getSongByIdQuery={getSongById.data}
                // For Browse Tab
                songIdForBrowseTab={songIdState}
                // For Recent Played
                getRecentPlayQuery={getRecentPlay.data}
                songIdForRecentPlayedTab={songIdState}
                // as = {component}
                as={state}
              />
            )}
          </>
        )}{" "}
      </main>
    </div>
  );
}

// Dashboard.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

const MUSIC_INFO_QUERY = gql`
  query {
    getAllSongs {
      _id
      name
      description
      singer
      playCount
      cover
      musicSrc
    }
  }
`;

const GET_SONG_BY_ID_QUERY = gql`
  query songById($songId: ID!) {
    getSongById(songId: $songId) {
      _id
      name
      description
      singer
      musicSrc
      cover
    }
  }
`;

const RECENT_PLAYED_QUERY = gql`
  query {
    getRecentPlay {
      _id
      name
      singer
      musicSrc
      cover
    }
  }
`;

export default Dashboard;
