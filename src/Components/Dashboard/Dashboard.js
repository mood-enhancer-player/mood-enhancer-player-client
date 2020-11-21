import React, { useContext, useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../context/auth";
import { useQuery, gql } from "@apollo/client";
import Home from "../Home/Home";
import Browse from "../Browse/Browse";
import YourLib from "../YourLib/YourLib";
import Privacy from "../Common/Privacy";
import RecentPlayed from "../RecentPlayed/RecentPlayed";
import MenuForNewUser from "./ProfileMenu/MenuForNewUser";
import MenuForExistingUser from "./ProfileMenu/MenuForExistingUser";
import HideDrawer from "./NavWithHiddenDrawer/HideDrawer";
import AppNavBar from "./AppBar/AppNavBar";
import MusicPlayer from "../Common/MusicPlayer/MusicPlayer";
import Loader from "../Common/Loader/Loader";
import MainAppNavBar from "./MainAppNavBar/MainAppNavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: theme.palette.primary.main,
    minHeight: "100vh",
    // background: "green",
  },
}));

const Dashboard = ({ themeHandler, themeToggler }) => {
  const classes = useStyles();

  const { user, logout } = useContext(AuthContext);

  const [songIdState, setSongIdState] = useState("5facdb3c754e8e12fc5a2568");
  const musicInfo = useQuery(MUSIC_INFO_QUERY);

  const getSongById = useQuery(GET_SONG_BY_ID_QUERY, {
    variables: {
      songId: songIdState,
    },
  });

  const getRecentPlay = useQuery(RECENT_PLAYED_QUERY);

  // const [mobileOpen, setMobileOpen] = React.useState(false);

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  // const isMenuOpen = Boolean(anchorEl);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  // State For Menu Switching
  const [state, setState] = React.useState("Home");
  const selectedMenuItem = (selectedTab) => {
    setState(selectedTab);
  };

  const privacy = (privacy) => {
    setState(privacy);
  };

  // Song Card Click Handler
  const cardClickHandler = (receiveSongId) => {
    setSongIdState(receiveSongId);
    console.log("cardhandlercliekd", receiveSongId);
  };

  // Search for Browse tab
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const menuId = "primary-search-account-menu";

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MainAppNavBar
        state={state}
        handleSearch={handleSearch}
        menuId={menuId}
        selectedMenuItem={selectedMenuItem}
        privacy={privacy}
        themeToggler={themeToggler}
        themeHandler={themeHandler}
      />
      {/* <AppNavBar
        menuId={menuId}
        state={state}
        handleDrawerToggle={handleDrawerToggle}
        handleSearch={handleSearch}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />

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
        selectedMenuItem={selectedMenuItem}
        privacy={privacy}
      /> */}

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
        )}
      </main>
    </div>
  );
};

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
