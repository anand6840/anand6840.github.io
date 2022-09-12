import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import "./About.css";
import profile from "../assets/img/profile/profile.png";
const About = () => {
  return (
    <div className="bgi mar-container about-container">
      <Container className="about-container bgi" id="about">
        <Row>
          <Col>
            <h1>ABOUT ME</h1>
          </Col>
        </Row>
      </Container>
      <Container className="bgi">
        <Row className="about-container">
         
          <Col>
            <div className="aobut-name">
              <h6>Hi there! I am  Anand Waghmare,</h6>
              <h4></h4>
              <br />
              <p>
                I am currently learning full stack web development at Masai
                School. I am passionate about solving real-world problems and
                actively looking for opportunities in the field of web
                development and software engineering.
              </p>
            </div>
          </Col>
          <Col>
            <Image src={profile} rounded className="profile-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { About };
