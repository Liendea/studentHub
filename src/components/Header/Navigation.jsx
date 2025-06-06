import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

function Navigation() {
  return (
    <div className="navigation bg-light rounded-5 w-25 d-flex ms-auto">
      <ul className="nav justify-content-center mx-auto">
        <li className="nav-item">
          <Link
            component={RouterLink}
            to="/"
            className="nav-link"
            color="primary"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link component={RouterLink} to="/news" className="nav-link">
            News
          </Link>
        </li>
        <li className="nav-item">
          <Link component={RouterLink} to="/courses" className="nav-link">
            Courses
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
