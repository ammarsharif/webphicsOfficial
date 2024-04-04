import React from "react";
import { Typography } from "@mui/material";
import "./About.css";
import Dash from "../Dashboard/Dash";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ammar from "../../img/ammar.png";
import tasmia from "../../img/tasmia.jpg";

const images = [
  { url: ammar, width: "48%" },
  { url: tasmia, width: "48%" },
];

const ImageButton = styled(Box)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
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
  borderRadius: "5px",
});

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
  borderRadius: "5px",
}));

const About = () => {
  return (
    <div>
      <Dash />
      <div className="overlayProject">
        <div
          className="container bg-light shadow-lg rounded-3 col-6 mt-5 pb-5"
          style={{ height: "70%", width: "60%" }}
        >
          <div className="d-flex justify-content-center p-0 rounded mt-2">
            <div className="mt-5 p-4 row heading">
              <Typography
                variant="h4"
                align="center"
                fontWeight="bold"
                sx={{ fontFamily: "Roboto Serif", color: "" }}
              >
                WebPhics
              </Typography>
              <Typography variant="body1" align="center">
                Our Team
              </Typography>
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
                  >
                    <ImageSrc
                      style={{ backgroundImage: `url(${image.url})` }}
                    />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                  </ImageButton>
                ))}
              </Box>
            </div>
          </div>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Roboto Serif",
            }}
          >
            M.AMMAR SHARIF(SWEN-074) &emsp;&emsp;&emsp;TASMIA IZHAR(SWEN-041)
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
