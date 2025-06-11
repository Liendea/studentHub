import DesktopLinks from "./DesktopLinks";

function DesktopNavbar() {
  return (
    <nav
      className="navbar rounded-5 w-85 d-flex "
      style={{
        minWidth: "400px",
        marginLeft: "2rem",
      }}
    >
      <DesktopLinks color="secondary" />
    </nav>
  );
}

export default DesktopNavbar;
