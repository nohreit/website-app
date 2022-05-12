import { Container } from "react-bootstrap";
import Skills from "./Skills";
import SocialLinks from "./SocialLinks";

const admin = "Yunthar";

const Introduction = () => {
  return (
    <>
      <Container className="card card-body mt-5">
        <h1 className="featurette-heading">Welcome!</h1>
        <h2 className="lead">
          Hello! I'm {admin}, a software engineer from New York.
        </h2>
        <p className="lead">
          My hobbies are video games, soccer (Red Devils fan 😊), bicycling and
          eventually writting codes.
          <br />
          I enjoy helping people with their codes or to improve their
          understanding of the programming logic. <br />
          One of my favorite things is the reaction of people when I debug their
          code while explaining it, then run it and BOOM the expected result
          just showed up. It is like I am doing magic tricks or witchcraft 🧙‍♂️🪄.
          Though there are times it doesn't work 😅 and it is funny.
        </p>
        <p className="lead">
          I have interest in many fields such are web development, android/iOS,
          data analysis, engineering, astronomy, history, math and other
          sciences domains. However, as this is too much to learn, I decided to
          only focus on couple of them <b>web development</b> and&nbsp;
          <b>android or iOS</b> and the rest will be for my cultivation.
        </p>
      </Container>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Introduction />
      <SocialLinks />
      <Skills />
    </>
  );
};

export default Home;
