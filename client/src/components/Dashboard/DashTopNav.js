import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  InputAdornment,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

function DashSideNav() {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4682B4",
      },
    },
  });
  return (
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
          <div
            className="col-3 mx-5"
            style={{
              color: "#FBBC05",
            }}
          >
            <ThemeProvider theme={theme}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Semester
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Select Semester"
                  onChange={handleChange}
                  style={{
                    backgroundColor: "white",
                    color: "FBBC05",
                    fontSize: "18px",
                    borderRadius: 10,
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      overflow: "hidden",
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
                >
                  <MenuItem value={10}>Semester 1</MenuItem>
                  <MenuItem value={20}>Semester 2</MenuItem>
                  <MenuItem value={30}>Semester 3</MenuItem>
                  <MenuItem value={40}>Semester 4</MenuItem>
                  <MenuItem value={50}>Semester 5</MenuItem>
                  <MenuItem value={60}>Semester 6</MenuItem>
                  <MenuItem value={70}>Semester 7</MenuItem>
                  <MenuItem value={80}>Semester 8</MenuItem>
                </Select>
              </FormControl>
            </ThemeProvider>
          </div>
          <div className="offset-4 col-2">
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
          <div className="p-1 col-2" style={{ display: "inline-block" }}>
            <button
              className="btnProj btn"
              onClick={() => navigate("/uploadproject")}
            >
              Upload Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashSideNav;
