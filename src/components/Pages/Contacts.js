import React from "react";
import imageData from '../../imageData'
import Logo from '../../assets/images/baboon-logo.svg'
import { BackgroundSurface } from "../../PageBarrel";
import "../Styles/Contacts.css"



export const Contacts = () => {


  return (
  <div className="contacts-layout">
    {/* header */}
    <div className="contacts-container">
      <h1>Contacts</h1>
    </div>

    <div className="logo-container"> 
    <img src={Logo} alt="Logo Icon" className="logo-image"/>
    </div>

    <div className="contact-icons-container">
       <img src={imageData.icon5} alt="Telegram Icon" className="contact-icon"/>
       <img src={imageData.icon6} alt="Twitter Icon" className="contact-icon"/>    
    </div>

  
    <div className="contacts-content">
    <BackgroundSurface>
      <div className="contacts-text">
      <p>$Babo coin has no association with anything or anyone. This token is simply paying homage to how we all approached the crytpo markets .</p>
      <p>$Babo is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.</p>
      </div>
      </BackgroundSurface>
    </div>
    

  </div >);
};
