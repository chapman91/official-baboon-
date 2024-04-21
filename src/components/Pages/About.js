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
      <p>
Babo is tired of the endless cycle of frogs, and dog coins. They have all had their time. 

It’s time for the most recognizable meme in crypto to come to life.

</p>
      </BackgroundSurface>
      </BackgroundWrapper>
      </div>

      <div className="about__content-two">
      <BackgroundWrapper>
      <BackgroundSurface>
      Babo is here to change the narrative. No presale, zero taxes, and token ownership is renounced. Fueled by pure memetic power. $Babo is a coin for everyone that is in crypto, including those joining the journey now.
      </BackgroundSurface>
      </BackgroundWrapper>
      </div>
    </div>
    
    </div>
    </GridLayout>
  );
};
