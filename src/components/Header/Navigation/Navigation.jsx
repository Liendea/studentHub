import DesktopNavbar from "./DesktopNavbar";
import MobileMenu from "./MobileMenu";

function Navigation({ isMobileView }) {
  return (
    <>
      {isMobileView ? (
        <MobileMenu isMobileView={isMobileView} />
      ) : (
        <DesktopNavbar />
      )}
    </>
  );
}

export default Navigation;
