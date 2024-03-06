import React from "react";
import coinImage from "../../assets/images/coinbaboon.png";
import "./SplashScreen.css";

function SplashScreen() {
  return (
    <div className="splash-screen">
      <img src={coinImage} alt="loading-image" />
    </div>
  );
}

export default SplashScreen;
