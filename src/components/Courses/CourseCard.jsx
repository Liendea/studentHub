import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Buttons from "../Button/Buttons";
import { useNavigate } from "react-router-dom";
import courses from "./CourseData/CourseData";
import { useState } from "react";
import RegistrationModal from "./RegistrationModal";
import { useContext } from "react";
import RegistrationContext from "../../context/RegistrationContext";

export default function CourseCard({ courseId }) {
  const { registerToCourse, registrations } = useContext(RegistrationContext);

  const course = courses.find((c) => c.id === courseId);

  const isAlreadyRegistered = registrations.some(
    (r) => r.courseId === course.id
  );

  const navigate = useNavigate();

  const maxLength = 60; // Max antal tecken att visa innan trunkering

  // korta ner texten
  const displayedText =
    course.description.length > maxLength
      ? course.description.slice(0, maxLength) + "..."
      : course.description;

  function handleReadMore() {
    navigate(`/courses/${courseId}`);
  }

  const [open, setOpen] = useState(false); // styr popup
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setName("");
    setEmail("");
  };

  const handleRegister = () => {
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
    handleCloseDialog();
  };

  return (
    <>
      <Card
        sx={{
          width: "clamp(250px, 30vw, 350px)",
          height: "250px",
        }}
      >
        <CardActionArea onClick={handleReadMore}>
          {/* Bakgrundsbild */}
          <Box
            sx={{
              backgroundImage: `url(${course.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
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
              variant="h5"
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
              variant="body2"
              sx={{
                color: "text.primary",
                height: "40px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {displayedText}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Buttons
              variant="outlined"
              onClick={handleReadMore}
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
              Läs mer
            </Buttons>
            <Buttons
              onClick={handleOpenDialog}
              disabled={isAlreadyRegistered}
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
              {isAlreadyRegistered ? "Registrerad" : "Registrera"}
            </Buttons>
          </div>
        </CardActions>
      </Card>

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
