import React from "react";
import GridLayout from '../common/GridLayout/GridLayout';
import image1 from "../../assets/icons/icon7.svg"
import image2 from "../../assets/icons/icon8.svg"
import image3 from "../../assets/icons/icon3.jpg"
import image4 from "../../assets/icons/icon9.svg"
import image5 from "../../assets/images/coinbaboon.png"
import image6 from "../../assets/icons/icon10.svg"
import { BackgroundSurface } from "../../PageBarrel";
import "../Styles/HowToBuy.css";



export const HowToBuy = () => {
  const CurrencyArrowStyles = {
    height: '30px',
    width: '30px',
  }


  return (
  <GridLayout columns={1} rows={4}>
  <div className="HowToBuy-header">
    <h1>HowToBuy
    </h1>
    </div>
  
  
    <div className="instruction__container">

      {/* Instruction One  */}
     
      <div className="container">
      <BackgroundSurface>
        <div className="icons">
        <img src={image1} alt="Phantom Icon" className="icon-instruction" />
        </div>
        <div className="text">
          <h2>create a wallet</h2>
          <p>download phantom or your wallet of choice from the app store or google play store for free.
          Desktop users, download the google chrome extensions by going to phantom.app</p>
        </div>
        </BackgroundSurface>
      </div>
     

      {/* Instruction Two  */}
     
       <div className="container">
       <BackgroundSurface>
        <div className="icons">
        <img src={image2} alt="Solana Icon" className="icon-instruction" />
        </div>
        <div className="text">
          <h2>get some sol</h2>
          <p>have Sol in your wallet to switch to $Babo. If you do not have any Sol, you can 
          buy directly on phantom, transfer from another wallet, or buy on an
          exchange such as Coinbase or Kraken and send it to your wallet.</p>
        </div>
        </BackgroundSurface>
      </div>
      
      
      {/* Instruction Third  */}
        <div className="container">
        <BackgroundSurface>
        <div className="icons">
        <img src={image2} alt="Solana Icon" className="icon-instruction" />
        <img src={image4} alt="Raydium Icon" className="icon-instruction" />
        </div>
        <div className="text">
          <h2>go to Raydium or Jupiter </h2>
          <p>connect to Raydium or Jupiter exchange.  Go to  raydium.io or jup.ag. in chrome or  
          browser of choice. Connect your wallet. Paste the $Babo token address into Jupiter or
          Raydium, and confirm. When phantom prompts you for a wallet signature, sign. </p>
        </div>
        </BackgroundSurface>
      </div>
     
      
      {/* Instruction Fourth  */}
     
        <div className="container">
        <BackgroundSurface>
        <div className="icons">
        <img src={image3} alt="Jupiter Icon" className="icon-instruction" />
        <img src={image6} alt="currency converter" style={CurrencyArrowStyles} className-="currency-arrow" />
        <img src={image5} alt="Baboon Icon" className="icon-instruction" />
        </div>
        <div className="text">
          <h2>switch sol for $Babo</h2>
          <p>switch Sol for $Babo. We have ZERO taxes so you don’t have to 
          worry about buying with a specific slippage, although you may need 
          to use slippage during times of market volatility. </p>
        </div>
        </BackgroundSurface>
      </div>
     
    </div>
  
 </GridLayout>
  );
};


