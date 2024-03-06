import React from "react";
import GridLayout from '../common/GridLayout/GridLayout';
import { BackgroundSurface } from "../../PageBarrel";
import coinImage from "../../assets/images/coinbaboon.png";
import styled from "styled-components";
import '../Styles/About.css'

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: var( --text-bg-clr);
  margin-bottom: 30px;
  padding: 10px 10px;
  border-radius: 9px;
  line-height: 1.5; 
  word-spacing: 0.1em;
`;


export const About = () => {
  return (
    <GridLayout columns={1} rows={2}>
    
    <div className="about-section">

    {/* Grid Container */}
    <div className="coin-container">
      <img className="coin" src={coinImage} alt="Coin" />
      <img className="coin" src={coinImage} alt="Coin" />
      <img className="coin" src={coinImage} alt="Coin" />
      <img className="coin" src={coinImage} alt="Coin" />
      <img className="coin" src={coinImage} alt="Coin" />
      <img className="coin" src={coinImage} alt="Coin" />
      <img className="coin" src={coinImage} alt="Coin" />
      <img className="coin" src={coinImage} alt="Coin" />
    </div>

    {/* Content Container */}
    <div className="about__container">
      <h1 className="about__header">About</h1>
      <div className="about__content-one">
      <BackgroundWrapper>
      <BackgroundSurface>
      Baboon is tired of the old dog shiba inu doge wtf narrative. The frogs and dogs have had their time. It is time for something that is more in tune with the crypto community. How did you first approached the markets? We did it all thinking we were Larry Fink. We simple ape in and then ape out. Got rich, and lost it all. Baboon is epitome of that narrative. The meme king of the space.
      </BackgroundSurface>
      </BackgroundWrapper>
      </div>

      <div className="about__content-two">
      <BackgroundWrapper>
      <BackgroundSurface>
      $Babo is here to change the narrative. Transparency launched  no presale, zero taxes, and token ownership renounced. Everything is visible on Baboon X account. $Babo is a coin for everyone that is in crypto, including those joining the journey now. Fueled by pure memetic power, $Babo is here to steal the show.
      </BackgroundSurface>
      </BackgroundWrapper>
      </div>
    </div>
    
    </div>
    </GridLayout>
  );
};
