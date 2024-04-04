import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import "./LandingPage.css";

function LandingNav() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" offset-1 pt-4 col-3 img-fluid img-responsive">
          <img src={logo} alt="Logo" />
        </div>
        <div className="pt-4 row col-8 ">
          <div className=" pt-2 offset-8 col-2 ">
            <button
              className="btnTest btn"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>
          </div>
          <div className="pt-2 col-2">
            <button className="btnSign btn" onClick={() => navigate("/signin")}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingNav;
