import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import nomina from "../../Assets/Projects/project-1.jpeg";
import annahl from "../../Assets/Projects/project-2.png";
import lgtech from "../../Assets/Projects/project-3.png"
import richeese from "../../Assets/Projects/project-4.png"
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nomina}
              isBlog={true}
              title="IT Engginer - Project As Migration System"
              description="
              At PT. Bank Permata TBK I Work to migration System from Windows 7 to Windows 10, 
              I must Install Computer, Setting All Application, Setting Printer, Setting Email and
              I must Teaching Costumers With New System, Last Task , Costumers Verify Check With UAT All Done Before Migration System.
              "
              // link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={annahl}
              isBlog={true}
              title="IT Engginer - Build A Wifi Network "
              description=
              "
              My job is to setup a cable network, cable lines covering the upper building to the lower part of the building, then my job is to configure Cross Cable settings, Perform Cable Management,
              Configure AP (Access Point) and Mikrotik Configuration, ensure wifi is alive and has a strong signal according to school needs
              "
              // link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lgtech}
              isBlog={true}
              title="IT Engginer- Monitoring and Build Lan Network"
              description="
            my job is to monitor the movement of world currencies against Idr, Ensure that Movement is in accordance with Reuters or Treasure Data, Solve problems related to what is experienced by customers and provide solutions, Do LAN Network Development,
            Perform Server Maintenance

              "
              // link="https://gist.github.com/soumyajit4419/ef44d41fdc510637c7f6730d1bbce2ed"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={richeese}
              isBlog={true}
              title="Supervisor"
              description="my job is to monitor team work, make the team follow company rules, make the team enthusiastic about achieving targets, teach new employees about company regulations and how to work properly and correctly, and make the team compact and feel kinship in the work area
              "
              // link="https://gist.github.com/soumyajit4419/dc94177bc4954752051798f88fbce1df"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
