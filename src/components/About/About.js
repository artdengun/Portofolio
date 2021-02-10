import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Perkenalkan <strong className="purple">Saya </strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
         <strong>Skillset </strong>
        </h1>

        <h1 className="project-heading">
          <strong className="purple"> Frontend </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-html5-plain-wordmark colored " />
          <Techstack iconName="devicon-css3-plain-wordmark colored" />
          <Techstack iconName="devicon-javascript-plain colored" />
          <Techstack iconName="devicon-react-original-wordmark colored" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark colored" />

        </Row>
        <h1 className="project-heading">
          <strong className="purple"> Backend </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-java-plain-wordmark" />
          <Techstack iconName="cib-spring" />
          <Techstack iconName="devicon-docker-plain-wordmark" />
          <Techstack iconName="devicon-mysql-plain-wordmark"/>
          <Techstack iconName="devicon-postgresql-plain-wordmark"/>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-ubuntu-plain-wordmark colored" />
          <Techstack iconName="devicon-intellij-plain colored" />
          <Techstack iconName="devicon-github-original-wordmark" />
          <Techstack iconName="devicon-gitlab-plain-wordmark" />
          <Techstack iconName="cib-postman" />
          <Techstack iconName="cib-heroku" />
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
