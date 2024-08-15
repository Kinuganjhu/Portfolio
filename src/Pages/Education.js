import { Button } from 'react-bootstrap';

const Education = () => {
  const certificateUrl = 'https://drive.google.com/file/d/1TXss-JcRUa2BOdH6tmGHIKSw0fPHE9wD/view?usp=drivesdk';

  return (
    <> 
          <h2 className="Skills">Education</h2>
    <section className="Education">
      <article>
        <h3>Bachra High School, Chatra, Jharkhand 829201</h3>
        <p>Intermediate of Commerce</p>
        <time dateTime="2021-2023">2021-2023</time>
        <p><strong>64.80%</strong></p>
        <a href={certificateUrl} target="_blank" rel="noopener noreferrer" aria-label="View certificate from Bachra High School">
          <Button variant="light">
            View Certificate
          </Button>
        </a>
      </article>
    </section>
    </>
  );
};

export default Education;
