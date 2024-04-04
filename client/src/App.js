import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dash";
import LandingPage from "./components/LandingPage/LandingPage";
import NewProject from "./components/Dashboard/NewProject";
import Quiz from "./components/Quiz/Quiz";
import StartQuiz from "./components/Quiz/StartQuiz";
import Performance from "./components/Performance/Performance";
import About from "./components/About/About";
function App() {
  const DUMMY_DATA = [
    {
      major: "ReactJs",
      title: "Website Dashboard",
      date: new Date(2000, 9, 22),
    },
    {
      title: "Landing Page",
      major: "Figma",
      date: new Date(2001, 4, 2),
    },
  ];
  const [data, setData] = useState(DUMMY_DATA);
  const projectCard = (data) => {
    console.log("In App.js");
    // console.log(data);
    setData((prev_state) => {
      return [data, ...prev_state];
    });
  };
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/selectquiz" element={<Quiz />} />
            <Route path="/quiz" element={<StartQuiz />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/dashboard" element={<Dashboard items={data} />} />
            <Route
              path="/uploadproject"
              element={<NewProject onShowProject={projectCard} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
