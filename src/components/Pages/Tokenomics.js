import React from "react";
import { TokenChart } from "../../UIComponentsBarrel";
import { BackgroundSurface } from "../../PageBarrel";
import "../Styles/Tokenomics.css";




export const Tokenomics = () => {
  return (
    <div>
     <div className="header"><h1>Tokenomics</h1></div> 
     <div className="header__subtitle"> <p>Total Supply: 10,000,000,000</p></div>
     <div className="header__text">
      <BackgroundSurface>
      <div className="header__content">
      <p>No Taxes, No Bullshit. It is that simple.</p> <br/>
      <p>Token ownership is renounced, revoked mint authority,  and revoked freeze authority.</p>
      </div>
      </BackgroundSurface>
      </div>
      <TokenChart />
    </div>
   
  );
};
