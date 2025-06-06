import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../App.css";

export default function ResponsiveGrid({ children }) {
  return (
    <section className="courses">
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: 2000,
          margin: "0 1rem",
          marginBottom: "2rem",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns="auto"
          justifyContent="center"
          alignItems="flex-start"
        >
          {children}
        </Grid>
      </Box>
    </section>
  );
}
