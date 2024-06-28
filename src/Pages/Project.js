import Data from './Data'
import {Button} from 'react-bootstrap';
const Project =()=>{
  return(
    <>
      <div class='container'> 
    <h1>My Portofolio</h1> 
    {Data.map((item)=>(
  <div key ={item.id} className='item'>
  <img src ={item.logo}/>
    <h6>{item.title}</h6>
    
  </div>
    ))}
      </div>
    </>
    )
}
export default Project;