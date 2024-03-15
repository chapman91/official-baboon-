import { Link, NavLink } from "react-router-dom";
import "./navbar-component.css";
import logo from "../../../assets/images/baboon-logo.svg";
import React, {useState} from 'react';
import { Content } from "../../common/WalletAdapter/Content.tsx";

export const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
 

    <nav className="navbar">
      <div className="navbar__border">
        <Link to="/home" className="navbar__title">
          <img src={logo} alt="Baboon Logo" />
        </Link>
        <div
          className="navbar__menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          {/* Not working */}
          <li>
            <NavLink to="/HowToBuy">How to Buy</NavLink>
          </li>
          <li>
            <NavLink to="/Roadmap">Roadmap</NavLink>
          </li>
          {/* Not working */}
          <li>
            <NavLink to="/Tokenomics">Tokenomics</NavLink>
          </li>
          <li>
            <NavLink to="/Contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/BuyNow">Buy Now</NavLink>
          </li>
          <li className="button-container">
            <Content />
            </li>
        </ul>
      </div>
    </nav>
 
  );
};
