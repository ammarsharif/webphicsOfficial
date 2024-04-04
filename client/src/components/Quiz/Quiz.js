import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Dash from "../Dashboard/Dash";
import web from "../../img/web.jpg";
import app from "../../img/app.jpg";
import design from "../../img/design.jpg";
import "./Quiz.css";
const Uploadproject = (props) => {
  //This is for navigational process
  const navigate = useNavigate();
  //Submit Form
  const submitHandler = (event) => {
    event.preventDefault();
  };
  //For Images Button
  const images = [
    {
      url: web,
      title: "Web Development",
      width: "30%",
    },
    {
      url: app,
      title: "App Development",
      width: "30%",
    },
    {
      url: design,
      title: "Website Designing",
      width: "30%",
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
        borderRadius: "10px",
      },
    },
    borderRadius: "20px",
    margin: "1%",
    boxSizing: "border-box",
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    borderRadius: "15px",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
    borderRadius: "15px",
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));

  return (
    <div>
      <Dash />
      <div className="overlayProject">
        <div
          className="container bg-light shadow-lg rounded-3 col-6 mt-5 pb-5 "
          style={{ height: "85%", width: "70%" }}
        >
          <div className="d-flex justify-content-center p-0 rounded mt-2">
            <form onSubmit={submitHandler}>
              <div className="mt-5 p-4 row">
                <h2
                  className="fw-bold d-flex justify-content-center"
                  style={{ color: "", fontFamily: "Roboto Serif" }}
                >
                  Select Catagory
                </h2>
                <p className="row d-flex justify-content-center">
                  {" "}
                  &nbsp; Select the appropriate test category based on your
                  requirements
                </p>
              </div>
              <div className="row">
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    minWidth: 300,
                    width: "100%",
                  }}
                >
                  {images.map((image) => (
                    <ImageButton
                      focusRipple
                      key={image.title}
                      style={{
                        width: image.width,
                      }}
                      onClick={() => navigate("/quiz")}
                    >
                      <ImageSrc
                        style={{ backgroundImage: `url(${image.url})` }}
                      />
                      <ImageBackdrop className="MuiImageBackdrop-root" />
                      <Image>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          color="inherit"
                          sx={{
                            position: "relative",
                            p: 4,
                            pt: 2,
                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                          }}
                        >
                          {image.title}
                          <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                      </Image>
                    </ImageButton>
                  ))}
                </Box>
                <div className="d-flex justify-content-end mt-4"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploadproject;
