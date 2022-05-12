import { Card, Container, Container as Nav } from "react-bootstrap";
import javaIcon from "../assets/img/icons/java.svg";
import javascriptIcon from "../assets/img/icons/java-script.svg";
import htmlIcon from "../assets/img/icons/html5.svg";
import cssIcon from "../assets/img/icons/css3.svg";
import pythonIcon from "../assets/img/icons/python.svg";
import bootstrapIcon from "../assets/img/icons/bootstrap.svg";

const SkillIcons = () => {
  // I know i can shorten it with a list and using loop for that but bear with me.
  return (
    <>
      <Nav className="d-flex flex-row w-75 text-center">
        <Card className="w-50 m-2 px-3 pt-3 border-white">
          <Card.Img
            className="img-thumbnail border-white"
            variant="top"
            src={javaIcon}
            alt="javaIcon"
          />
          <Card.Body>
            <Card.Title className="h6">Java</Card.Title>
          </Card.Body>
        </Card>
        <Card className="w-50 m-2 px-3 pt-3 border-white">
          <Card.Img
            className="img-thumbnail border-white"
            variant="top"
            src={htmlIcon}
            alt="htmlIcon"
          />
          <Card.Body>
            <Card.Title className="h6">HTML</Card.Title>
          </Card.Body>
        </Card>
        <Card className="w-50 m-2 px-3 pt-3 border-white">
          <Card.Img
            className="img-thumbnail border-white"
            variant="top"
            src={cssIcon}
            alt="cssIcon"
          />
          <Card.Body>
            <Card.Title className="h6">CSS</Card.Title>
          </Card.Body>
        </Card>
        <Card className="w-50 m-2 px-3 pt-3 border-white">
          <Card.Img
            className="img-thumbnail border-white"
            variant="top"
            src={javascriptIcon}
            alt="javascriptIcon"
          />
          <Card.Body>
            <Card.Title className="h6">Javascript</Card.Title>
          </Card.Body>
        </Card>
        <Card className="w-50 m-2 px-3 pt-3 border-white">
          <Card.Img
            className="img-thumbnail border-white"
            variant="top"
            src={pythonIcon}
            alt="pythonIcon"
          />
          <Card.Body>
            <Card.Title className="h6">Python</Card.Title>
          </Card.Body>
        </Card>
        <Card className="w-50 m-2 px-3 pt-3 border-white">
          <Card.Img
            className="img-thumbnail border-white"
            variant="top"
            src={bootstrapIcon}
            alt="bootstrapIcon"
          />
          <Card.Body>
            <Card.Title className="h6">Bootstrap</Card.Title>
          </Card.Body>
        </Card>
      </Nav>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <Container className="card card-body mt-5">
        <h1>Skills</h1>
        <hr />
        <SkillIcons />
      </Container>
    </>
  );
};

export default Skills;
