import { createMuiTheme } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#1A1D24", // Drawer Color
      main: "#0F131A", // MusicCard background
      dark: "#222831", // Card hover,
      contrastText: "#fff",
    },
    grey: {
      50: "#2a2b2c", // card color
    },
    secondary: lightBlue,
  },
});

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#abcdef",
      main: "#000000",
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: lightBlue,
  },
});

export { darkTheme, lightTheme };
