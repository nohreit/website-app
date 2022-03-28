import { Container, Nav } from "react-bootstrap";

const SocialLinks = () => {
  return (
    <>
      <Container className="card card-body mt-5">
        <h1>Links</h1>
        <hr/>
        <Nav as="ul" className="nav justify-content-center">
          <Nav.Item as="li" className="border border-secondary rounded-3 mx-3">
            <Nav.Link
              href="https://github.com/nohreit"
              target="_blank"
              rel="noreferrer noopener"
              className="nav-link px-5 text-muted"
            >
              Github
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="border border-secondary rounded-3 mx-3">
            <Nav.Link
              href="https://www.linkedin.com/in/thiernobah07/"
              target="_blank"
              rel="noreferrer noopener"
              className="nav-link px-5 text-muted"
            >
              LinkedIn
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="border border-secondary rounded-3 mx-3">
            <Nav.Link
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className="nav-link px-5 text-muted"
              disabled
            >
              Resume
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  );
};

export default SocialLinks;
