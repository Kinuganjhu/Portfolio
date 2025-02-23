import { Button } from "react-bootstrap";
import "../Styles/Education.scss";

const Education = () => {
  const certificateUrl =
    "https://drive.google.com/file/d/1TXss-JcRUa2BOdH6tmGHIKSw0fPHE9wD/view?usp=drivesdk";

  return (
    <div className="education-container">
      <h2 className="education-title">Education</h2>
      <section className="education-content">
        <article className="education-card">
          <h3 className="education-institute">
            Bachra High School, Chatra, Jharkhand 829201
          </h3>
          <p className="education-field">Intermediate of Commerce</p>
          <time className="education-time" dateTime="2021-2023">
            2021-2023
          </time>
          <p className="education-grade">
            <strong>65%</strong>
          </p>
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View certificate from Bachra High School"
          >
            <Button variant="light" className="certificate-button">
              View Certificate
            </Button>
          </a>
        </article>
      </section>
    </div>
  );
};

export default Education;
