import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";
import { Button } from "react-bootstrap";
import resume from "../assets/files/resume.pdf";

export const Navbaar = () => {
  return (
    <div className="navbar-container" >
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        id="navbar"
        className="animate-navbar nav-theme justify-content-between"
      >

        <Container>

          <Navbar.Brand>
            <img id="AW" src="https://jade-naiad-322c75.netlify.app/Logo.png" />

          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav>

              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link eventKey={2} href="#about">
                About
              </Nav.Link>
              <Nav.Link eventKey={2} href="#coding">
                Statistics
              </Nav.Link>
              <Nav.Link href="#Skills">Skills</Nav.Link>
              
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link eventKey={2} href="#contact">
                Contact
              </Nav.Link>
              <Navbar.Brand>
                {/* Resume */}
                <Button
                  className="m-2"
                  variant="success"
                  href={resume}
                  target="_blank"
                >
                  Resume
                  <i className="fa fa-download"></i>
                </Button>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
