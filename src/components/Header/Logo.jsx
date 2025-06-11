import { Link } from "react-router-dom";
import logo from "../../Images/logo.svg";
import logo_black from "../../Images/logo_black.svg";

function Logo({ color, isDrawerOpen, setIsDrawerOpen, isMobileView }) {
  const handleLogoClick = () => {
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  };
  return (
    <Link to="/" onClick={handleLogoClick}>
      <img
        src={color === "black" ? logo_black : logo}
        alt="logo"
        style={{ width: isMobileView ? "80%" : "100%" }}
      />
    </Link>
  );
}

export default Logo;
