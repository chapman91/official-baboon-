import React from "react";

import { BackgroundSurface } from "../../PageBarrel";
import "../Styles/Roadmap.css"

export const Roadmap = () => {
    const BackgroundAdjust = {
      height: '200px',
      width: '350px',
    }


  return (
//  Roadmap Container 
  <div className="wrapper">

  <div className="Roadmap__header"> 
    <h1> Roadmap </h1>
  </div>
  
  <BackgroundSurface >
  <div className="Roadmap__text" style={BackgroundAdjust}>
      <ul>
        <li>Phase I: Meme</li>
        <li>Phase II: Ape in, HODL</li>
        <li>Phase III: Baboon Takeover, Ape Out</li>
      </ul>
  </div>
  </BackgroundSurface>

  </div>

  );
};
