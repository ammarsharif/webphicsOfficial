import React, { useState, useEffect } from "react";
// import { Typography, Box, Stack, Button, IconButton } from "@mui/material";
import { Stack, TextField } from "@mui/material";
import google from "../../img/google.png";
import bg from "../../img/landing_page_bc.jfif";
import "./Signin.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { useNavigate } from "react-router-dom";
import LandingNav from "../LandingPage/LandingNav";
import LandingMid from "../LandingPage/LandingMid";
const Signin = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  const dispatch = useDispatch();
  const handle = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    setPostData({
      creator: "",
      phone: "",
      password: "",
      passwordConfirm: "",
    });
  };
  const navigate = useNavigate();
  return (
    <div>
      <LandingNav />
      <div
        className="overlay imgBg"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "750px",
        }}
      >
        <div className="container bg-opacity-75 shadow-lg rounded-3 col-6 mt-5 pb-5">
          <div className="d-flex justify-content-center p-0 rounded">
            <form onSubmit={handle}>
              <div className="mt-5 pt-5 py-4">
                <h2 className="text-light fw-bold ">
                  Sign In to <span style={{ color: "#FBBC05" }}>WebPhics</span>
                </h2>
                <p> &nbsp; We Suggest you to use your work Email</p>
              </div>
              <div className="mb-2">
                <Stack spacing={4}>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      label="Name"
                      type="text"
                      name="creator"
                      className="form-control "
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={postData.creator}
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          creator: e.target.value,
                        })
                      }
                    />
                  </Stack>
                </Stack>
              </div>
              <div className="mb-2">
                <Stack spacing={4}>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      label="Password"
                      type="password"
                      name="creator"
                      className="form-control "
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={postData.password}
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          password: e.target.value,
                        })
                      }
                      autoComplete="new-password"
                    />
                  </Stack>
                </Stack>
              </div>
              <div className="signButton d-grid mb-2">
                <button
                  type="submit"
                  className="btn btn-lg"
                  style={{
                    backgroundColor: "#FBBC05",
                    borderColor: "#FBBC05",
                    color: "white",
                    fontSize: "medium",
                    borderRadius: "10px",
                  }}
                >
                  Sign In
                </button>
              </div>
              <div style={{ position: "relative" }}>
                <hr
                  style={{
                    border: "none",
                    borderTop: "1px solid black",
                    margin: "20px 0",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#5f5f5e",
                    padding: "0 10px",
                  }}
                >
                  OR
                </span>
              </div>
              <div className="googleButton d-grid mb-2">
                <button
                  type="submit"
                  className="btn bg-light btn-lg registerGoogle"
                  style={{
                    fontSize: "medium",
                    borderRadius: "10px",
                  }}
                >
                  <img src={google} alt="#" height="100px" />
                  &nbsp; &nbsp;Sign In with Google
                </button>
              </div>
              <div className="text-lighter mt-4" style={{ color: "black" }}>
                <span className="mt-1" style={{ display: "inline-block" }}>
                  Don't have an account ? &nbsp; &nbsp;
                </span>
                <button
                  className="btn text-white register col-4"
                  style={{ display: "inline-block" }}
                  onClick={() => navigate("/signup")}
                >
                  <b>Register</b>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <LandingMid />
    </div>
  );
};

export default Signin;
