import { useState } from "react";
import { Container, Row, Col, Button, Offcanvas } from "react-bootstrap";
import Data from "../Pages/Data.js";
import "../Styles/Project.scss";

const Project = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  return (
    <Container className="project-container">
      <h2 className="project-title">Projects</h2>
      <Row>
        {Data.map((project) => (
          <Col key={project.id} xs={12} md={4} className="project-card">
            <img src={project.logo} alt={project.title} className="project-img" />
            <h5 className="project-title">{project.title}</h5>
            <Button
            variant ='outline-dark'
            className="custom-button view-details" onClick={() => handleShow(project)}>
              View Details
            </Button>
          </Col>
        ))}
      </Row>

      {/* OffCanvas for Project Details */}
      <Offcanvas show={show} onHide={handleClose} placement="bottom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{selectedProject?.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>{selectedProject?.description}</p>
          <div className="project-links">
            <a href={selectedProject?.url} target="_blank" rel="noopener noreferrer" className="custom-button live-demo">
              Live Demo
            </a>
            <a href={selectedProject?.Github} target="_blank" rel="noopener noreferrer" className="custom-button github">
              GitHub
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default Project;
