import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      light: grey[700],
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      primary: grey[900],
      secondary: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
      color: "#ffffff",
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: 400,
      color: "#ffffff",
      lineHeight: 1.4,
      opacity: 0.6,
    },
  },
});

export default theme;
