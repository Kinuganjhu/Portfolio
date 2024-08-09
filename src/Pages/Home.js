import Social from './Social.js'
import Project from './Project'
import Skills from './Skills'
import {Button} from 'react-bootstrap'
import logo from '../Images/profile.jpg'
const Home =()=>{
  return(
    <>
      
      <div className='header-item'>
   <img src ={logo} alt='profile.jpg'/>
     
      <h3>Hii, I'm Kinu Ganjhu
      </h3>
      <h1>Junior Frontend Developer
      </h1>
      <br/>
<a href="https://drive.google.com/file/d/1HaKIKOYM775JxvRsIcbOji3aGBX6aiiJ/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
  <Button variant="light" className="Btn">
    Download CV
  </Button>
</a>

      </div>
    
      <Social/>
      <Skills/>
    <Project/>
  
    </>
    
    )
}
export default Home;
