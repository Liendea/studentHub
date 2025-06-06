import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <Box
      className="container"
      sx={{
        padding: 0,

        margin: {
          xs: "auto",
          md: "0",
        },
      }}
    >
      <Box
        className="row"
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "center", // centrera innehåll vid små skärmar
            md: "flex-start", // vänsterjusterat från 950px och uppåt
          },
        }}
      >
        <Box
          sx={{
            width: {
              xs: "80%", // nästan hela bredden på mobil
              sm: "80%",
              md: "40vw", // som tidigare på desktop
            },
            textAlign: {
              xs: "center",
              md: "left",
            },
            mt: 4,
          }}
        >
          <Typography
            color="secondary"
            sx={{
              fontSize: {
                xs: "1.5rem", // mobil
                sm: "2rem", // små tablets
                md: "2.5rem", // laptops
                lg: "3rem", // stora skärmar
              },
              fontWeight: "bold",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}
          >
            Välkommen till StudentHub - din genväg till ny kunskap!
          </Typography>
          <Typography
            variant="subtitle1"
            color="secondary"
            sx={{
              fontSize: {
                xs: "0.8rem", // mobil
                sm: "0.9rem", // små tablets
                md: "1rem", // laptops
                lg: "1.2rem", // stora skärmar
              },
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            {" "}
            Utforska vårt breda kursutbud och ta första steget mot din framtid.
            Oavsett om du vill lära dig programmering, design, databaser eller
            något helt annat, har vi kurser för dig.
          </Typography>

          <Button
            variant="contained"
            component={Link}
            to="/courses"
            color="primary"
            sx={{
              fontSize: {
                xs: "0.75rem", // liten text på små skärmar
                sm: "0.875rem",
                md: "1rem", // normalstor text på större skärmar
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
    </Box>
  );
}

export default Home;
