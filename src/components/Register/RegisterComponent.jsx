import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Courses from "../Courses/CourseData/CourseData";
import Buttons from "../Button/Buttons";
import { useState, useContext } from "react";
import RegistrationContext from "../../context/RegistrationContext";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function Register() {
  const { registerToCourse, registrations } = useContext(RegistrationContext);
  const courses = Courses;

  // Filtrera bort redan registrerade kurser
  const availableCourses = courses.filter(
    (course) => !registrations?.some((rc) => rc.courseId === course.id)
  );

  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    const course = courses.find((c) => c.id === selectedCourseId);
    if (!course) {
      alert("Vänligen välj en kurs.");
      return;
    }

    registerToCourse(
      course.id,
      course.title,
      course.price,
      course.duration,
      course.nivå,
      course.image,
      name,
      email
    );
    // Töm formuläret efter registrering
    setSelectedCourseId("");
    setName("");
    setEmail("");
    alert("Registrering skickad! Du hittar din kurs under 'My courses'");
  };

  return (
    <>
      <Typography
        variant="h4"
        color="secondary"
        textAlign="center"
        marginTop="5rem"
      >
        Registrera dig på en kurs
      </Typography>
      ;
      <Box
        sx={{
          width: { xs: "90%", sm: "90%", md: "50%" },
          backgroundColor: "white",
          borderRadius: "30px",
          px: "2rem",
          py: "2rem",
          mx: "auto",
          my: "5rem",
        }}
      >
        <Stack marginBottom="1rem">
          <FormControl fullWidth>
            <InputLabel id="course-label" sx={{ color: "black" }}>
              Kurs
            </InputLabel>
            <Select
              labelId="course-label"
              id="kurs"
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              label="Kurs"
              sx={{ color: "black" }}
            >
              {availableCourses.length > 0 ? (
                availableCourses.map((course) => (
                  <MenuItem key={course.id} value={course.id}>
                    {course.title}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>Alla kurser är redan registrerade</MenuItem>
              )}
            </Select>
          </FormControl>
          <TextField
            label="Namn"
            fullWidth
            margin="normal"
            value={name}
            slotProps={{
              input: {
                style: { color: "black" }, // själva inmatningstexten
              },
              inputLabel: {
                style: { color: "black" }, // label ovanför fältet
              },
            }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="E-post"
            fullWidth
            margin="normal"
            value={email}
            slotProps={{
              input: {
                style: { color: "black" }, // själva inmatningstexten
              },
              inputLabel: {
                style: { color: "black" }, // label ovanför fältet
              },
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Stack>
        <Box>
          <Buttons
            variant="contained"
            color="primary"
            onClick={handleRegister}
            disabled={availableCourses.length === 0}
          >
            Registrera
          </Buttons>
        </Box>
      </Box>
    </>
  );
}

export default Register;
