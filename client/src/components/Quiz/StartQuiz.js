import React from "react";
import DashSideNav from "../Dashboard/DashSideNav";
import SelectQuizMenu from "./SelectQuizMenu";
import Mcqs from "./Mcqs";
function StartQuiz() {
  return (
    <div className="row ">
      <div className="col-2 p-0 m-0">
        <DashSideNav />
      </div>
      <div className=" col-10 p-0 m-0">
        <div className="container-fluid pad">
          <div className="row d-flex justify-content-end">
            <div
              className="topNav row py-4"
              style={{
                backgroundColor: "#FBBC05",
                height: "15%",
                width: "100%",
                float: "left",
              }}
            >
              <SelectQuizMenu />
            </div>
          </div>
          <div className="mx-5 my-3 p-2">
            <Mcqs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartQuiz;
