import { Container } from "react-bootstrap";
import underConstructionImg from "../assets/img/background/4232383.jpg";

const NoPage = () => {
  return (
    <Container className="card card-body mt-5">
      <h1>COMMING SOON!</h1>
      <img
        className="w-75 mx-auto my-3"
        src={underConstructionImg}
        alt="Website Underconstruction"
      />
    </Container>
  );
};

export default NoPage;
