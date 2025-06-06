import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import footerLogo from "../../Images/footer-logo.svg";
import mobileFooterLogo from "../../Images/mobileFooterLogo.png";

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
          src={mobileFooterLogo}
          alt="logo"
          style={{
            width: "clamp(100px, 90vw, 300px)",
            marginBottom: "1rem",
            marginTop: "2rem",
          }}
        ></img>
      ) : (
        <img
          src={footerLogo}
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
