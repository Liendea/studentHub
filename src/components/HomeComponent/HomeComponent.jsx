import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function HomeComponent() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{
        width: {
          xs: "80%",
          sm: "80%",
          md: "40vw",
        },
        height: { xs: "60vh", sm: "60vh", md: "80vh", lg: "100vh" },
        margin: {
          xs: "auto",
          sm: "auto",
          md: "0",
        },
        textAlign: {
          xs: "center",
          md: "left",
        },
      }}
    >
      <Typography
        variant="h1"
        color="secondary"
        sx={{
          fontSize: {
            xs: "2.5rem", // mobil
            sm: "2.5rem", // små tablets
            md: "2.5rem", // laptops
            lg: "3rem", // stora skärmar
          },
          fontWeight: "bold",
          lineHeight: 1.2,
          marginBottom: "1.5rem",
        }}
      >
        Välkommen till StudentHub
        <br /> - din genväg till ny kunskap!
      </Typography>
      <Typography vairant="body1" color="secondary" gutterBottom>
        {" "}
        Utforska vårt breda kursutbud och ta första steget mot din framtid.
        Oavsett om du vill lära dig programmering, design, databaser eller något
        helt annat, har vi kurser för dig.
      </Typography>

      <Box>
        <Button
          variant="contained"
          component={Link}
          to="/courses"
          color="primary"
          sx={{
            marginTop: "1.5rem",
            fontSize: {
              xs: "0.75rem",
              sm: "0.875rem",
              md: "1rem",
            },
            padding: {
              xs: "6px 12px",
              sm: "8px 16px",
              md: "10px 20px",
            },
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Se alla kurser
        </Button>
      </Box>
    </Box>
  );
}

export default HomeComponent;
