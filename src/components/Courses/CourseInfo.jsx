import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import courses from "./CourseData/CourseData";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Buttons from "../Button/Buttons";
import { Link } from "react-router-dom";
import RegistrationModal from "./RegistrationModal";
import { useState } from "react";
import { useContext } from "react";
import RegistrationContext from "../../context/RegistrationContext";

function CourseInfo() {
  const { registerToCourse } = useContext(RegistrationContext);
  const { courseId } = useParams(); // hämta id från url
  const course = courses.find((c) => String(c.id) === courseId);

  // State för modal och input
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Funktioner för modal och registrering
  const handleOpenDialog = () => setOpen(true);

  const handleCloseDialog = () => {
    setOpen(false);
    setName("");
    setEmail("");
  };

  const handleRegister = () => {
    registerToCourse(course.id, course.title, name, email, course.nivå);
    handleCloseDialog();
  };
  // Hantera om kursen inte hittas
  if (!course) {
    return (
      <>
        <Box sx={{ p: "1rem" }}>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb fs-4">
              <li className="breadcrumb-item">
                <Link to="/courses" className="link-light">
                  Courses
                </Link>
              </li>
              <li
                className="breadcrumb-item active text-light-emphasis"
                aria-current="page"
              >
                Course details
              </li>
            </ol>
          </nav>
        </Box>

        <Box>
          <Typography variant="h3">Kursen hittades inte</Typography>
          <Typography variant="Body1">Kurs-ID: {courseId}</Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <Box sx={{ p: "1rem" }}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb fs-4">
            <li className="breadcrumb-item text-light-emphasis">
              <Link
                to="/courses"
                className="link-secondary"
                style={{ textDecoration: "none" }}
              >
                Courses
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-light"
              aria-current="page"
            >
              Course details
            </li>
          </ol>
        </nav>
      </Box>

      <Box sx={{ width: "100%", height: "auto", py: "4rem" }}>
        <Card
          sx={{
            border: "1px solid white",
            width: "80%",
            height: "auto",
            mx: "auto",
            my: "2rem",
            backgroundColor: "white",
          }}
        >
          {/* Bakgrundsbild */}
          <Box
            sx={{
              backgroundImage: `url(${course.image})`,
              backgroundSize: "cover",
              backgroundPosition: "top right",
              height: 120,
              display: "flex",
              alignItems: "flex-end",
              position: "relative",
            }}
          >
            {/* Overlay för bättre läsbarhet */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
              }}
            />

            {/* Titel  */}
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{
                color: "white",
                position: "relative",
                zIndex: 1,
                padding: 2,
                margin: 0,
              }}
            >
              {course.title}
            </Typography>
          </Box>

          {/* Description  */}
          <CardContent>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                color: "text.primary",
                height: "auto",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginBottom: "2rem",
              }}
            >
              {course.description}
            </Typography>
            <hr />
            <Typography variant="Body1" color="text.primary" gutterBottom>
              Lärare: {course.lärare}
            </Typography>
            <br />
            <Typography variant="Body1" color="text.primary" gutterBottom>
              Om {course.lärare} : {course.omLäraren}
            </Typography>
            <br />
            <Typography variant="Body1" color="text.primary" gutterBottom>
              Längd: {course.duration}
            </Typography>
            <br />
            <Typography variant="Body1" color="text.primary" gutterBottom>
              Plats: {course.location}
            </Typography>
            <br />
            <Typography variant="Body1" color="text.primary" gutterBottom>
              Nivå: {course.nivå}
            </Typography>
            <br />
            <Typography variant="Body1" color="text.primary" gutterBottom>
              Pris: {course.price}
            </Typography>
          </CardContent>

          <CardActions>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Buttons
                onClick={handleOpenDialog}
                variant="contained"
                sx={{
                  fontSize: {
                    xs: "0.75rem", // liten text på små skärmar
                    md: "0.875rem",
                  },
                  padding: {
                    xs: "6px 12px",
                    md: "8px 16px",
                  },
                }}
              >
                Registrera
              </Buttons>
            </div>
          </CardActions>
        </Card>
      </Box>

      <RegistrationModal
        open={open}
        courseTitle={course.title}
        name={name}
        email={email}
        onNameChange={(e) => setName(e.target.value)}
        onEmailChange={(e) => setEmail(e.target.value)}
        handleClose={handleCloseDialog}
        handleRegister={handleRegister}
      />
    </>
  );
}

export default CourseInfo;
