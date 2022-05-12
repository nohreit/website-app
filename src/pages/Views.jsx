import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBarPage from "../templates/NavbarPage";
import FooterPage from "../templates/FooterPage";

const BodyPage = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

const Layout = () => {
  return (
    <>
      <NavBarPage />
      <BodyPage />
      <FooterPage />
    </>
  );
};

export default Layout;
