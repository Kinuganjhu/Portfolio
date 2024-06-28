import Web from '../Icons/Web.svg';
import GitHub from '../Icons/Github.svg';
import Linkedin from '../Icons/LinkedIn.svg';

const Data = [
  {
    id: 1,
    logo: Linkedin,
    link: 'https://www.linkedin.com/in/kinu-ganjhu-ba38b2275',
  },
  {
    id: 2,
    logo: GitHub,
    link: 'http://github.com/Kinuganjhu',
  },
  {
    id: 3,
    logo: Web,
    link: 'https://kinuganjhu99.blogspot.com',
  },
];
const Social = () => {
  return (
    <div className="social-links">
      {Data.map((item) => (
        <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
          <img src={item.logo} alt={`Link to ${item.link}`} />
        </a>
      ))}
    </div>
  );
};
export default Social;