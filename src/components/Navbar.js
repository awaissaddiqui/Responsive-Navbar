import React,{useState}  from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

import "./Navbar.css";
import { useMediaQuery } from "react-responsive";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({maxWidth:"1150px"})

 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu =()=>{
    if (isMobile) {
      setIsMenuOpen(false);
    }
  }
 
 return (
   <header className="header">
     <nav className="nav container">
       <NavLink to="/" className="nav__logo">
         Navigation Bar
       </NavLink>

       <div
        className={`nav__menu ${showMenu ? "show-menu" : ""}`}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
               Home
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/service" className="nav__link" onClick={closeMenuOnMobile}>
               Services
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/about-us"
               className="nav__link"
               onClick={closeMenuOnMobile}
             >
               About Us
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/favorite"
               className="nav__link"
               onClick={closeMenuOnMobile}
             >
               Favorite
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/location"
               className="nav__link"
               onClick={closeMenuOnMobile}
             >
               Location
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/get-started" className="nav__link nav__cta" onClick={closeMenuOnMobile}>
               Get Started 
             </NavLink>
           </li>
         </ul>
         <div className="nav__close" id="nav-close" onClick={toggleMenu}>
           <IoClose />
         </div>
       </div>

       <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
         <IoMenu />
       </div>
     </nav>
   </header>
 );
};

export default Navbar