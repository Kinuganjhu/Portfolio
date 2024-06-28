import Html from '../Icons/Html.svg';
import Css from '../Icons/Css.svg';
import Javascript from '../Icons/Javascript.svg';
import Bootstrap from '../Icons/Bootstrap.svg';
import ReactIcon from '../Icons/React.svg';
import Sass from '../Icons/Sass.svg';
import Firebase from '../Icons/Firebase.svg';
import Git from '../Icons/Git.svg'; 
export default function Skills() {
  return (
    <>
      <h3 className='Skills'>Skills</h3>
    <div className="skills-grid">
      <img src={Html} alt="HTML" />
      <img src={Css} alt="CSS" />
      <img src={Javascript} alt="JavaScript" />
      <img src={Bootstrap} alt="Bootstrap" />
      <img src={ReactIcon} alt="React" />
      <img src={Sass} alt="Sass" />
      <img src={Firebase} alt="Firebase" />
      <img src={Git} alt="Git" />
      
      <div className="placeholder"></div>
    </div>
    </>
  );
}
