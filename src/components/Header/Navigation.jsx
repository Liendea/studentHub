import Drawer from "@mui/material/Drawer";
import DesktopNavbar from "./DesktopNavbar";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Links from "./Links";
import { useState } from "react";

function Navigation({ isMobileView, isHome }) {
  const [isDrawerOpen, setIsDraweropen] = useState(false);

  return (
    <>
      {isMobileView ? (
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDraweropen}
        >
          <Box p={2} width="250px" textAlign="center" role="presentation">
            <Typography>Mobile menu </Typography>
            <Links></Links>
          </Box>
        </Drawer>
      ) : (
        <DesktopNavbar isHome={isHome} />
      )}
    </>
  );
}

export default Navigation;
