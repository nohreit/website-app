import { Container, Nav, Navbar } from "react-bootstrap";

const NavBarPage = () => {
    return (
      <>
        <Navbar className="navbar navbar-dark" bg="dark" expend="lg">
          <Container>
            <Navbar.Brand href="/">NOHREIT.GITHUB.IO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/project">Project</Nav.Link>
                <Nav.Link href="/blogs">Blogs</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  };

  export default NavBarPage;