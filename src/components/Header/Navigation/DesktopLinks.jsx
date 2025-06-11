import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function DesktopLinks() {
  return (
    <ul className="nav justify-content-end flex-nowrap">
      <li className="nav-item mx-1">
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

      <li className="nav-item mx-1">
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
      <li className="nav-item mx-1">
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
      <li className="nav-item mx-1">
        <Link
          component={RouterLink}
          to="/register"
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
          Register
        </Link>
      </li>
      <li className="nav-item mx-1">
        <Link
          component={RouterLink}
          to="/my-courses"
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
          My Courses
        </Link>
      </li>
    </ul>
  );
}

export default DesktopLinks;
