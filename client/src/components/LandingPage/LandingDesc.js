import React from "react";
import "./LandingPage.css";

import ques from "../../img/question.png";
function LandingDesc() {
  return (
    <div>
      <div className="container Desc">
        <div className="row">
          <div className="heading col-6">
            <h1 className="col-6 orange fw-bold">Website Description</h1>
          </div>
          <div className="disc col-6 text-secondary lh-lg">
            <p>
              We are currently in the process of developing a website that
              allows students to upload their projects and take coding tests to
              evaluate their proficiency in a specific programming language. The
              results of the test will be displayed as a percentage on their
              profile page, which can be viewed by prospective employers
              searching for candidates with similar skills.
            </p>
          </div>
        </div>
        <div className="row mt-5 picBelow">
          <div className="picQues col-6 img-fluid img-responsive ">
            <img src={ques} alt="Question Pic" />
          </div>
          <div className="col-6 mt-5">
            <div className="col-6 orange fw-bold">
              <h1>Online Coding Test</h1>
            </div>
            <div className="display disc text-secondary lh-lg">
              <p>
                The website is a platform for students to showcase their
                programming skills by taking coding tests in various languages
                and displaying their performance as a percentage on their
                profile page for potential employers to view.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingDesc;
