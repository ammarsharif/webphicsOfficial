import React, { useState } from "react";
import "./LandingPage.css";
import bg from "../../img/landing_page_bc.jfif";
import LandingNav from "./LandingNav";
import LandingMid from "./LandingMid";
import LandingDesc from "./LandingDesc";
import LandingFooter from "./LandingFooter";
import Signin from "../Signin/Signin";
// import Post from "../Posts/Posts";
function LandingPage() {
  const [showSignin, setShowSignin] = useState(false);

  const handleSigninClick = () => {
    setShowSignin(true);
    document.body.classList.add("blur");
  };

  const handleSigninClose = () => {
    setShowSignin(false);
    document.body.classList.remove("blur");
  };

  return (
    <div className="landing-page">
      <div
        className={`imgBg ${showSignin ? "hide" : ""}`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "750px",
        }}
      >
        <LandingNav onSigninClick={handleSigninClick} />
        <LandingMid />
        {/* <Post /> */}
      </div>
      <LandingDesc />
      <LandingFooter />
      {showSignin && <Signin onClose={handleSigninClose} />}
    </div>
  );
}

export default LandingPage;
