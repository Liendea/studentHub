import Typography from "@mui/material/Typography";
import ResponsiveGrid from "../Grid/ResponsiveGrid";
import Box from "@mui/material/Box";
import CourseFilter from "./CourseFilter";
import courses from "./CourseData";
import Grid from "@mui/material/Grid";
import CourseCard from "./CourseCard";

function CoursesComponent() {
  return (
    <>
      {/* Hela kurs sidan */}
      <Box
        className="container"
        sx={{
          maxWidth: 2000,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
          },
          marginBottom: "2rem",
        }}
      >
        {/* Heading & bodytext Box*/}
        <Box
          className="container"
          sx={{
            maxWidth: "500px",
            minWidth: "300px",
            wrap: "wrap",
            margin: "0",
            marginBottom: "1rem",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h2"
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
            Våra kurser
          </Typography>
          <Typography vairant="body1" color="secondary">
            Utforska vårt breda kursutbud och ta första steget mot din framtid.
            Oavsett om du vill lära dig programmering, design, databaser eller
            något helt annat, har vi kurser för dig.
          </Typography>
        </Box>

        {/*Filtrerings komponenet*/}
        <CourseFilter />
      </Box>

      {/* Grid */}
      <ResponsiveGrid>
        {courses.map((course) => (
          <Grid size={{ xs: 4, sm: 4, md: 4, lg: 3 }} key={course.id}>
            <CourseCard
              title={course.title}
              description={course.description}
              image={course.image}
            />
          </Grid>
        ))}
      </ResponsiveGrid>
    </>
  );
}

export default CoursesComponent;
