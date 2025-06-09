import Links from "./Links";

function DesktopNavbar({ isHome }) {
  return (
    <nav
      className={`navbar rounded-5 w-25 d-flex ${
        isHome ? "me-auto" : "ms-auto"
      } `}
      style={{
        backgroundColor: "transparent",
        minWidth: "400px",
        marginLeft: "2rem",
      }}
    >
      <Links />
    </nav>
  );
}

export default DesktopNavbar;
