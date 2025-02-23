import { OverlayTrigger, Tooltip } from "react-bootstrap";
import linkedIcon from '../Icons/LinkedIn.svg';
import GithubIcon from '../Icons/Github.svg';
import BlogIcon from '../Icons/Web.svg';
import GmailIcon from '../Icons/Gmail.svg';
import "../Styles/Social.scss";

const Social = () => {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/kinu-ganjhu-ba38b2275", icon: linkedIcon, label: "LinkedIn" },
    { href: "http://github.com/Kinuganjhu", icon: GithubIcon, label: "GitHub" },
    { href: "https://kinuganjhu99.blogspot.com/", icon: BlogIcon, label: "Personal Blog" },
    { href: "mailto:kinuganjhu02@gmail.com", icon: GmailIcon, label: "Gmail" }
  ];

  return (
    <div className="social-container">
      {socialLinks.map((social, index) => (
        <OverlayTrigger
          key={index}
          placement="top"
          overlay={<Tooltip>{social.label}</Tooltip>}
        >
          <a href={social.href} target="_blank" rel="noopener noreferrer">
            <img src={social.icon} alt={social.label} className="social-icon" />
          </a>
        </OverlayTrigger>
      ))}
    </div>
  );
};

export default Social;
