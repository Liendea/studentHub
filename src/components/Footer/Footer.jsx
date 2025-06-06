import { Typography } from "@mui/material";
import { Box } from "@mui/material";

function Footer({ isMobileView }) {
  return (
    <Box
      className="container"
      sx={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isMobileView ? (
        <img
          src="/assets/images/mobileFooterLogo.png"
          alt="logo"
          style={{
            width: "clamp(100px, 90vw, 300px)",
            marginBottom: "1rem",
          }}
        ></img>
      ) : (
        <img
          src="/assets/images/footer-logo.svg"
          alt="logo"
          style={{
            width: "clamp(300px, 90vw, 1200px)",
          }}
        ></img>
      )}

      <Typography variant="body1" size="small">
        © 2025 LB Design. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
