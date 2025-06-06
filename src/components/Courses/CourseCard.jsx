import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Buttons from "../Button/Buttons";
import { useState } from "react";

export default function CourseCard({ title, description, image }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 100; // Max antal tecken att visa innan trunkering

  // Text att visa beroende på om expanded är true eller false
  const displayedText = expanded
    ? description
    : description.length > maxLength
    ? description.slice(0, maxLength) + "..."
    : description;

  return (
    <Card
      sx={{
        width: "clamp(250px, 30vw, 350px)",
        height: expanded ? "auto" : 250,
      }}
    >
      <CardActionArea onClick={() => setExpanded(!expanded)}>
        {/* Bakgrundsbild */}
        <Box
          sx={{
            backgroundImage: `url(${image})`,
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
            {title}
          </Typography>
        </Box>

        {/* Description  */}
        <CardContent>
          <Typography
            variant="body2"
            sx={{
              color: "text.primary",
              height: expanded ? "auto" : 40,
              overflow: "hidden",
              textOverflow: expanded ? "unset" : "ellipsis",
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
            onClick={() => setExpanded(!expanded)}
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
            {expanded ? "Visa mindre" : "Läs mer"}
          </Buttons>
          <Buttons
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
  );
}
