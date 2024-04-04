import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingMid() {
  const navigate = useNavigate();
  return (
    <div className="container top">
      <div className="row orange top col-5 d-flex align-items-center justify-content-around">
        <div className="fontweight">
          <h2>Create Your</h2>
        </div>
        <div>
          <h1 className="fontweight">Personal Portfolio</h1>
        </div>
        <div>
          <p className="lh-base">
            You can create your personal space for your work portfolio's even
            you can add your personal space
          </p>
        </div>
        <div>
          <button className="btnFree btn" onClick={() => navigate("/signup")}>
            Try for Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingMid;
