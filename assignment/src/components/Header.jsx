import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MobileNavbar } from "./MobileNavbar";
export const Header = () => {
  return (
    <header className="header">
      <div className="logo">nullBrains.</div>

      <nav className="navbar">
        <a className="active" href="#">
          Home
        </a>
        <a href="#">Features</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <a href="#">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
      </nav>
      <div>
        <button className="bg-none">Sign In</button>
        <button className="bg">Sign Up</button>
      </div>
      <MobileNavbar />
    </header>
  );
};
