import Social from './Social.js'
import Project from './Project'

import {Button} from 'react-bootstrap'
import logo from './profile.png'
const Home =()=>{
  return(
    <>
      
      <div className='header-item'>
     <img src ={logo}alt ='profile.png'/> 
      <h3>Hii, I'm Kinu Ganjhu
      </h3>
      <h1>Junior Frontend Developer</h1>
      <br/>
<a href="https://drive.google.com/file/d/1KAsSx7KjdYEZ8Ns21nHkGvDvOefy-M1_/view" target="_blank" rel="noopener noreferrer">
  <Button variant="light" className="Btn">
    Download CV
  </Button>
</a>

      </div>
      <Social/>
    <Project/>
    
    </>
    
    )
}
export default Home;