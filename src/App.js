import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import {
  About,
  Contacts,
  Home,
  HowToBuy,
  Tokenomics,
  Roadmap,
  BuyNow
} from "./PageBarrel";
import { NavbarComponent, Footer } from "./UIComponentsBarrel";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

// Functional Component
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <SplashScreen />
      ) : (
        <div>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={< Navigate to="/Home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/HowToBuy" element={<HowToBuy />} />
            <Route path="/Roadmap" element={<Roadmap />} />
            <Route path="/Tokenomics" element={<Tokenomics />} />
            <Route path="/BuyNow" element={<BuyNow />} />

          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
