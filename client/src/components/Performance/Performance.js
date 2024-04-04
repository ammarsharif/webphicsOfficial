import React from "react";
import DashSideNav from "../Dashboard/DashSideNav";
import { TextField, InputAdornment } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import PerformMid from "./PerformMid";
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
              <div className="offset-9 col-2">
                <TextField
                  label="Search"
                  type="search"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                      overflow: "hidden",
                      backgroundColor: "white",
                      color: "FBBC05",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#FBBC05",
                        boxShadow: "inset 0px 0px 5px rgba(251, 188, 5, 0.5)",
                      },
                    },
                    "& .MuiInputAdornment-positionEnd": {
                      "& .MuiSvgIcon-root": {
                        fontSize: "1.5rem",
                        color: "grey",
                      },
                      "&:hover .MuiSvgIcon-root": {
                        color: "#FBBC05",
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <BiSearch />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mx-5 my-3 p-2">
            <PerformMid />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartQuiz;
