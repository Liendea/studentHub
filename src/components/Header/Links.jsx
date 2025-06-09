import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

function Links() {
  return (
    <ul className="nav justify-content-center mx-auto">
      <li className="nav-item mx-2">
        <Link
          component={RouterLink}
          to="/"
          className="nav-link"
          sx={{
            fontSize: "1.2rem",
            color: "white",
            textDecoration: "none",
            "&:hover": {
              color: "#5D75FF",
              textDecoration: "none",
              fontWeight: "600",
            },
          }}
        >
          Home
        </Link>
      </li>

      <li className="nav-item mx-2">
        <Link
          component={RouterLink}
          to="/news"
          className="nav-link"
          sx={{
            fontSize: "1.2rem",
            color: "white",
            textDecoration: "none",
            "&:hover": {
              color: "#5D75FF",
              textDecoration: "none",
              fontWeight: "600",
            },
          }}
        >
          News
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link
          component={RouterLink}
          to="/courses"
          className="nav-link"
          sx={{
            fontSize: "1.2rem",
            color: "white",
            textDecoration: "none",
            "&:hover": {
              color: "#5D75FF",
              textDecoration: "none",
              fontWeight: "600",
            },
          }}
        >
          Courses
        </Link>
      </li>
    </ul>
  );
}

export default Links;
