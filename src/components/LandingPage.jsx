import React, { useState } from "react";
import "./LandingPage.css";

const LandingPage = () => {

  const [showPopup, setShowPopup] = useState(true);
  
  const handleLandingPage = () =>{
    setShowPopup(!showPopup);
  }

  return (
    
    <div className="lpFormat">
      <div className="item">
        <p>Conference_Expense Landing page</p>
        <p>Plan your next major event with us!</p>
        <button onClick={handleLandingPage}>Get Started</button>
      </div>
      <div className="item">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
