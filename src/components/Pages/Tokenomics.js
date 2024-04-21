import React from "react";
import { TokenChart } from "../../UIComponentsBarrel";
import { BackgroundSurface } from "../../PageBarrel";
import "../Styles/Tokenomics.css";
import CopyButton from "../common/ContractAddress/CopyButton";



export const Tokenomics = () => {
  const contractAddress = 'Ez5vGvkoy86FQ1c5X7TDzPfnN2sbmQKWehAqAF8bQQ5T';

  return (
    <div>
     <div className="header"><h1>Tokenomics</h1></div> 
     <div className="header__subtitle"> <p>Total Supply: 10,000,000,000</p></div>
     <CopyButton address={contractAddress}></CopyButton>
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
