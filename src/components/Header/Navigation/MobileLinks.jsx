import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

function MobileLinks({ setIsDrawerOpen }) {
  return (
    <ul
      className="nav justify-content-center flex-column
     mx-auto my-5 "
    >
      <li className="nav-item mx-2 my-2">
        <Link
          component={RouterLink}
          to="/"
          className="nav-link"
          onClick={() => setIsDrawerOpen(false)}
          sx={{
            fontSize: "1.2rem",
            color: "primary",
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

      <li className="nav-item mx-2 my-2">
        <Link
          component={RouterLink}
          to="/news"
          className="nav-link"
          onClick={() => setIsDrawerOpen(false)}
          sx={{
            fontSize: "1.2rem",
            color: "primary",
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
      <li className="nav-item mx-2 my-2">
        <Link
          component={RouterLink}
          to="/courses"
          className="nav-link"
          onClick={() => setIsDrawerOpen(false)}
          sx={{
            fontSize: "1.2rem",
            color: "primary",
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
      <li className="nav-item mx-2">
        <Link
          component={RouterLink}
          to="/my-courses"
          className="nav-link"
          onClick={() => setIsDrawerOpen(false)}
          sx={{
            fontSize: "1.2rem",
            color: "primary",
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

export default MobileLinks;
