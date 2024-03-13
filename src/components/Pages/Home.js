import React, { useEffect } from "react";
import GridLayout from '../common/GridLayout/GridLayout'
import imageData from '../../imageData'
import "../Styles/Home.css"

export const Home = () => {

  useEffect(() => {
    document.title= "Baboon"
  }, [])

  // Grid Modifications 
const gridModification = {
        columnGap: '10px',
        rowGap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
} 

  // Image import 
  const baboonImage = require('../../assets/images/cutBaboon.png');

  return (
    <GridLayout columns={2} rows={2} {...gridModification}>


    <div className="HeaderSection">

      {/* Header Text*/}
    <div className="HeaderSection__header">
      <h1 className="HeaderSection__heading">$BABO</h1>
    </div>
 
    {/* Subtitle */}
    <div className="HeaderSection__subtitle">
      <h2 className="HeaderSection__subtitle-text">Ape in, ape out.</h2>
      <h2 className="HeaderSection__subtitle-text">It is that simple.</h2>
    </div>


    {/* Home Page Content  */}
    <div className="HeaderSection__content">
      <p className="HeaderSection__context-text">They say you are a baboon for aping in. It is about trusting your gut instinct.</p>
    </div>

    </div>


      {/* Image Container */}
    <div className="image-container">
    <img  src={baboonImage} alt = "Baboon image" />
    </div>


    {/* Icons */}
    <div className="icons-container">
   <img src={imageData.icon1} alt="Icon 1" className="icon-image" />
    <img src={imageData.icon2} alt="Icon 2" className="icon-image" />
    <img src={imageData.icon3} alt="Icon 3" className="icon-image"/>
    <a href="https://solscan.io/token/Ez5vGvkoy86FQ1c5X7TDzPfnN2sbmQKWehAqAF8bQQ5T"  target="_blank" rel="noopener noreferrer" className="icon-image"><img src={imageData.icon4} alt="Icon 4" /></a>
    <a href="https://t.me/baboonmemecoin" target="_blank" rel="noopener noreferrer" className="icon-image"><img src={imageData.icon5} alt="Icon 5"/> </a>
    <a href="https://twitter.com/babomemecoin" target="_blank" rel="noopener noreferrer" className="icon-image"><img src={imageData.icon6} alt="Icon 6" /></a>
    </div>

  
    </GridLayout>
  );
};


