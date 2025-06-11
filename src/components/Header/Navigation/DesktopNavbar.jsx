import DesktopLinks from "./DesktopLinks";

function DesktopNavbar() {
  return (
    <nav className="navbar rounded-5 w-100 d-flex justify-content-end">
      <DesktopLinks color="secondary" />
    </nav>
  );
}

export default DesktopNavbar;
