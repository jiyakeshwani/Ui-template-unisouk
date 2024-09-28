import {
    faDribbble,
    faFacebook,
    faGithub,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Footer = () => {
  return (
    <footer>
      <div className="links">
        <a href=""> About</a>
        <a href="">Blog</a>
        <a href="">Team</a>
        <a href="">Pricing</a>
        <a href="">Contact</a>
        <a href="">Terms</a>
      </div>
      <div className="icons">
        <FontAwesomeIcon className="i" icon={faFacebook} />
        <FontAwesomeIcon className="i" icon={faInstagram} />
        <FontAwesomeIcon className="i" icon={faTwitter} />
        <FontAwesomeIcon className="i" icon={faGithub} />
        <FontAwesomeIcon className="i" icon={faDribbble} />
      </div>
      <p className="copy-right">
        &copy; 2021 SomeCompany,Inc, All rights reserved
      </p>
    </footer>
  );
};
