import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const MobileNavbar = () =>{
    const [isOpen , setIsOpen] = useState(false);

    if(!isOpen){
        return  <FontAwesomeIcon onClick={() => setIsOpen(true)} icon={faBars} className='bars' />
    }
    return (
      <div className="mobile-nav">
        <button className="close" onClick={() => setIsOpen(false)}>x</button>
        <nav>
          <a className="active" href="#">
          Home
        </a>
        <a href="#">Features</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <a href="#">Search  <FontAwesomeIcon icon={faMagnifyingGlass} /></a>
        <button className="bg-none-mob">Sign In</button>
        <button className="bg-none-mob">Sign Up</button>
        </nav>
      </div>
    )
}