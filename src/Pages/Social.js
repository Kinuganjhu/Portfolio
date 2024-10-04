import WebIcon from '../Icons/Web.svg';
import GitHubIcon from '../Icons/Github.svg';
import LinkedinIcon from '../Icons/LinkedIn.svg';
import GmailIcon from '../Icons/Gmail.svg';
import freelancer from '../Icons/freelancer.svg'
const Data = [
  {
    id: 1,
    logo: LinkedinIcon,
    link: 'https://www.linkedin.com/in/kinu-ganjhu-ba38b2275',
  },
  {
    id: 2,
    logo: GitHubIcon,
    link: 'http://github.com/Kinuganjhu',
  },
  {
    id: 3,
    logo: WebIcon,
    link: 'https://kinuganjhu99.blogspot.com',
  },
  {
    id: 4,
    logo: GmailIcon,
    link: 'mailto:kinuganjhu02@gmail.com',
  },{
    id:5,
    logo: freelancer,
    link: ' https://www.freelancer.in/u/KinuGanjhu'
  }
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
