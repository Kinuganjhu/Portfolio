import Social from './Social.js'
import Project from './Project'
import Skills from './Skills'
import Education from './Education'
import {Button} from 'react-bootstrap'
import logo from '../Images/Profile.png'
const Home =()=>{
  return(
    <>
      
      <div className='header-item'>
   <img src ={logo} alt='profile.jpg'/>
     
      <h3>Hii, I'm Kinu Ganjhu
      </h3>
      <h5>Aspiring Frontend Developer | Open to New Opportunities & Internships
      </h5>
      <br/>
<a href="https://drive.google.com/file/d/1S-qw3ZuAIKcYki6iyT5rxXpLHc-3n946/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
  <Button variant="light" className="Btn">
    Download CV
  </Button>
</a>

      </div>
      <Social/>
      <Education/>
      <Skills/>
    <Project/>
  
    </>
    
    )
}
export default Home;
