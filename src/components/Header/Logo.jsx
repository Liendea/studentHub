import { Link } from "react-router-dom";
import logo from "../../Images/logo.svg";

function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="logo" />{" "}
    </Link>
  );
}

export default Logo;
