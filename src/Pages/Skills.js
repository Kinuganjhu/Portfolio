import Html from '../Icons/Html.svg';
import Css from '../Icons/Css.svg';
import Javascript from '../Icons/Javascript.svg';
import Bootstrap from '../Icons/Bootstrap.svg';
import ReactIcon from '../Icons/React.svg';
import Sass from '../Icons/Sass.svg';
import Firebase from '../Icons/Firebase.svg';
import Git from '../Icons/Git.svg'; // Added Git import

export default function Skills() {
  return (
    <>
      <h3>Skills</h3>
      <div className='container'>
        <div className='item'>
          <img src={Html} alt='HTML' />
        </div>
        <div className='item'>
          <img src={Css} alt='CSS' />
        </div>
        <div className='item'>
          <img src={Javascript} alt='JavaScript' />
        </div>
        <div className='item'>
          <img src={Bootstrap} alt='Bootstrap' />
        </div>
        <div className='item'>
          <img src={ReactIcon} alt='React' />
        </div>
        <div className='item'>
          <img src={Sass} alt='Sass' />
        </div>
        <div className='item'>
          <img src={Firebase} alt='Firebase' />
        </div>
        <div className='item'>
          <img src={Git} alt='Git' /> {/* Added Git item */}
        </div>
      </div>
    </>
  );
}
