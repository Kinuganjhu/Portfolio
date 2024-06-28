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
      <Button
      variant ='light'
      style={{
       color: 'white', backgroundColor: 'rgb(37, 150, 190)'
      }}>Download CV</Button>
      </div>
      <Social/>
    <Project/>
    
    </>
    
    )
}
export default Home;