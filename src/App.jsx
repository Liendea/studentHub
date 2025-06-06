import "./App.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Navigation from "./components/Header/Navigation.jsx";
import Logo from "./components/Header/Logo.jsx";
import RouteMap from "./RouteMap.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/material";

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

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isNews = location.pathname === "/news";
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const HeaderAndNav = (
    <header className="d-flex justify-content-between align-items-center">
      <Logo />
      <Navigation />
    </header>
  );

  const MainContent = (
    <main>
      <RouteMap />
    </main>
  );

  return (
    <ThemeProvider theme={theme}>
      <>
        {isHome ? (
          <>
            {isHome && isMobileView ? (
              <>
                {HeaderAndNav}
                {MainContent}
                <Box
                  className="home-background"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/mobileBackground.png"
                    alt="Background"
                    style={{
                      width: "clamp(600px, 100vw, 1200px)",
                    }}
                  />
                </Box>
              </>
            ) : (
              <>
                <Box className="home-background">
                  {HeaderAndNav}
                  {MainContent}
                </Box>
              </>
            )}
          </>
        ) : (
          <>
            {HeaderAndNav}
            {MainContent}
          </>
        )}

        <footer>
          <Footer isMobileView={isMobileView} />
        </footer>
      </>
    </ThemeProvider>
  );
}

export default App;
