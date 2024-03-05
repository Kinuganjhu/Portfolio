import Skills from './Skills';
import Projects from './Projects';
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <h1>Hi, I'm Kinu Ganjhu<span className ='wave'>👋</span></h1>
     
      <h5>JUNIOR FRONTEND DEVELOPER</h5>
      <p>
        Welcome to my portfolio! As a Frontend Developer, I specialize in crafting immersive digital experiences that seamlessly blend design with functionality. With a keen eye for detail and a passion for user-centric design, I strive to create visually stunning and intuitive interfaces that captivate users and elevate brands. From responsive web applications to dynamic websites, I am dedicated to leveraging the latest technologies and best practices to bring ideas to life and deliver exceptional digital solutions. Explore my portfolio to see how I transform concepts into engaging user experiences that leave a lasting impression.
      </p>
      <Button variant="outline-primary"><a href ='https://in.linkedin.com/in/kinu-ganjhu'>HIRE ME</a></Button>&nbsp;
      <Button variant="outline-secondary">< a href ='https://drive.google.com/file/d/1QTxCyrMEOEgV8ELUoNXROKbLzzpfxbMx/view?usp=drivesdk '>GET CV</a></Button>
      <br />
      <Skills />
      <Projects />
    </>
  );
}
