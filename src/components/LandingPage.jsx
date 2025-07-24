import React, { useState } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleLandingPage = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && 
        <div className="lpFormat">
          <div className="item">
            <p>EventVerse Strategies</p>
            <p>Plan your next major event with us!</p>
            <button onClick={handleLandingPage}>Get Started</button>
          </div>
          <div className="item">
            <p>
              EventVerse Strategies is a cutting-edge conference and event
              planning agency that specializes in transforming professional
              gatherings into immersive, high-impact experiences. From tech
              summits and leadership retreats to hybrid expos and executive
              networking soirées, EventVerse brings innovation and precision to
              every detail. The team combines data-driven planning, seamless
              logistics, and dynamic branding to elevate client engagement and
              ROI. With custom app integrations, AI-powered scheduling tools,
              and creative design teams, EventVerse delivers events that are not
              just well-organized—but unforgettable.
            </p>
          </div>
        </div>
      }
    </div>
  );
};

export default LandingPage;
