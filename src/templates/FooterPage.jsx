import React from "react";
import { Container, Nav } from "react-bootstrap";

const title = "NOHREIT.GITHUB.COM";

const getCurrentYear = new Date(Date.now()).getFullYear();

const copyrights = (
  <p className="text-center text-muted">
    © {getCurrentYear} {title}
  </p>
);

const FooterPage = () => {
  return (
    <div className="bg-dark py-3 my-4" expend="lg">
      <Container>
        <Nav
          as="ul"
          className="nav justify-content-center border-bottom pb-3 mb-3"
        >
          <Nav.Item as="li">
            <Nav.Link href="/" className="nav-link px-2 text-muted">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/project" className="nav-link px-2 text-muted">
              Project
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/blogs" className="nav-link px-2 text-muted">
              Blogs
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/contact" className="nav-link px-2 text-muted">
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/about" className="nav-link px-2 text-muted">
              About
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {copyrights}
      </Container>
    </div>
  );
};

export default FooterPage;
