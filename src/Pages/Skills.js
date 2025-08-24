import { Container, Row, Col } from "react-bootstrap";
import HtmlIcon from "../Icons/Html.svg";
import CssIcon from "../Icons/Css.svg";
import JsIcon from "../Icons/Javascript.svg";
import SassIcon from "../Icons/Sass.svg";
import ReactIcon from "../Icons/React.svg";
import FirebaseIcon from "../Icons/Firebase.svg";
import GitIcon from "../Icons/Git.svg";
import BootstrapIcon from "../Icons/Bootstrap.svg";
import PythonIcon from "../Icons/Python.svg";
import "../Styles/Skills.scss";
const Skills = () => {
  const skills = [
    { icon: HtmlIcon, name: "HTML" },
    { icon: CssIcon, name: "CSS" },
    { icon: JsIcon, name: "JavaScript" },
    { icon: SassIcon, name: "Sass" },
    { icon: ReactIcon, name: "React" },
    { icon: FirebaseIcon, name: "Firebase" },
    { icon: GitIcon, name: "Git" },
    { icon: BootstrapIcon, name: "Bootstrap" }, 
    {
      icon: PythonIcon,
      name: "Python"
    }
  ];

  return (
    <Container className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <Row className="justify-content-center">
        {skills.map((skill, index) => (
          <Col key={index} xs={4} md={4} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
