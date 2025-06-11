import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useState } from "react";
import MobileLinks from "./MobileLinks";
import Logo from "../Logo";
import CloseIcon from "@mui/icons-material/Close";

function MobileMenu(isMobileView) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {isDrawerOpen ? (
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="menubutton"
          sx={{ zIndex: "2300" }}
          onClick={() => setIsDrawerOpen(false)}
        >
          <CloseIcon />
        </IconButton>
      ) : (
        <IconButton
          size="large"
          edge="start"
          color="secondary"
          aria-label="menubutton"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          p={4}
          width="100vw"
          textAlign="center"
          role="presentation"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "80dvh",
          }}
        >
          <MobileLinks setIsDrawerOpen={setIsDrawerOpen}></MobileLinks>

          <Logo
            color="black"
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
            isMobileView={isMobileView}
          />
        </Box>
      </Drawer>
    </>
  );
}

export default MobileMenu;
