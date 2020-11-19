import { createMuiTheme } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#1A1D24",
      main: "#0F131A",
      dark: "#222831",
      contrastText: "#fff",
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
