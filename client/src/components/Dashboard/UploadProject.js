import React, { useState } from "react";
import {
  Select,
  Button,
  TextField,
  Stack,
  MenuItem,
  InputLabel,
  FormControl,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import "./Dash.css";
import Dash from "./Dash";
// import InputField from "./InputField";
const Uploadproject = (props) => {
  //This is for Select Files
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (
      file.name.endsWith(".doc") ||
      file.name.endsWith(".docx") ||
      file.name.endsWith(".rar") ||
      file.name.endsWith(".zip")
    ) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      alert("Invalid file type. Please select a DOC, DOCX, Zip or RAR file.");
    }
  };

  //This is for SelectProject Menu Bar

  //This is for Styling Select are Color
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4682B4",
      },
    },
  });
  //This is for navigational process
  const navigate = useNavigate();

  //To get dynamic values for input fields
  // const myArray = [
  //   {
  //     title: "Project Title",
  //     date: new Date(1, 1, 2001),
  //   },
  //   {
  //     title: "Project",
  //   },
  // ];

  //For Date Handler
  const [date, setDate] = useState(null);
  const handleChange = (event) => {
    setDate(event);
    console.log(event);
  };
  //For Input Handler
  const [inputField, setInput] = useState("");
  const [inputSelector, setSelector] = useState("");
  const handleChangeField = (event) => {
    setInput(event.target.value);
    //   console.log(event.target.value);
  };
  const handleSelector = (event) => {
    setSelector(event.target.value);
  };
  //Submit Form
  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      title: inputField,
      major: inputSelector,
      date: new Date(date),
    };
    props.onSaveProject(formData);
    navigate("/dashboard");
  };
  return (
    <div>
      <Dash />
      <div className="overlayProject">
        <div
          className="container bg-light shadow-lg rounded-3 col-6 mt-5 pb-5 "
          style={{ height: "70%", width: "60%" }}
        >
          <div className="d-flex justify-content-center p-0 rounded mt-2">
            <form onSubmit={submitHandler}>
              <div className="mt-5 p-4 row">
                <h2
                  className="fw-bold d-flex justify-content-center"
                  style={{ color: "", fontFamily: "Roboto Serif" }}
                >
                  WebPhics
                </h2>
                <p className="row d-flex justify-content-center">
                  {" "}
                  &nbsp; Enter Your Details and Upload Project
                </p>
              </div>
              <div className="row">
                <div className="mb-2 offset-1 col-5">
                  <Stack spacing={4}>
                    <Stack direction="row" spacing={2}>
                      <TextField
                        label="Project Title"
                        type="text"
                        value={inputField}
                        name="creator"
                        className="form-control "
                        aria-describedby="emailHelp"
                        onChange={handleChangeField}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            overflow: "hidden",
                            backgroundColor: "white",
                            color: "FBBC05",
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              boxShadow:
                                "inset 0px 0px 5px rgba(0, 0, 255, 0.2)",
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
                        required
                      />
                    </Stack>
                  </Stack>
                </div>
                <div className="mb-2 col-5">
                  <ThemeProvider theme={theme}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Major Language
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={inputSelector}
                        label="Select Semester"
                        onChange={handleSelector}
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
                              boxShadow:
                                "inset 0px 0px 5px rgba(0, 0, 255, 0.2)",
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
                        required
                      >
                        <MenuItem value="ReactJs">ReactJs</MenuItem>
                        <MenuItem value="Html/Css">Html/Css</MenuItem>
                        <MenuItem value="Html/Css/JavaScript">
                          Html/Css/JavaScript
                        </MenuItem>
                        <MenuItem value="Java">Java</MenuItem>
                        <MenuItem value="MERN">MERN</MenuItem>
                        <MenuItem value="Python">Python</MenuItem>
                        <MenuItem value="React-Native">React-Native</MenuItem>
                        <MenuItem value="Flutter">Flutter</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                      </Select>
                    </FormControl>
                  </ThemeProvider>
                </div>
                {/* <InputField/> */}
                <div className="mb-2 offset-1 col-5">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Select date"
                      value={date}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
                <div className="mt-2 col-5">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FBBC05",
                      color: "#FFFFFF",
                      marginY: "6px",
                      "&:hover": {
                        backgroundColor: "#FFA500",
                      },
                    }}
                    component="label"
                  >
                    {selectedFile ? selectedFile.name : "Choose File"}
                    <input
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      // required
                    />
                  </Button>
                </div>
                <div className="d-flex justify-content-end mt-4">
                  <button
                    type="submit"
                    className="btn bg-transparent btn-lg signButton"
                    style={{
                      fontSize: "medium",
                      backgroundColor: "#FFA500",
                      borderColor: "#FFA500",
                      borderRadius: "10px",
                      marginLeft: "auto",
                    }}
                    // onClick={() => navigate("/dashboard")}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploadproject;
