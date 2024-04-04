import React from "react";
import DashTopNav from "./DashTopNav";
import DashSideNav from "./DashSideNav";
import ProjectCard from "./ProjectCard";

function Dash(props) {
  const items = props.items || [];

  const chunks = [];
  for (let i = 0; i < items.length; i += 4) {
    chunks.push(items.slice(i, i + 4));
  }

  return (
    <div className="row ">
      <div className="col-2 p-0 m-0">
        <DashSideNav />
      </div>
      <div className=" col-10 p-0 m-0">
        <DashTopNav />
        <div className="row mx-5 my-3">
          <h4 style={{ fontFamily: "Montserrat" }}>My Projects</h4>
          {chunks.map((chunk, index) => (
            <div className="row" key={index}>
              {chunk.map((data) => (
                <div className="col-3 my-2" key={data.title}>
                  <ProjectCard
                    title={data.title}
                    major={data.major}
                    date={data.date}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dash;
