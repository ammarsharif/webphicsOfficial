import React, { useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  ThemeProvider,
  createTheme,
} from "@mui/material";
function Selector() {
  //This is for SelectProject Menu Bar
  const [lang, setLang] = useState("");
  const handleChange = (event) => {
    setLang(event.target.value);
    console.log(event.target.value);
  };
  //This is for Styling Select are Color
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4682B4",
      },
    },
  });
  return (
    <div className="mb-2 col-5">
      <ThemeProvider theme={theme}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Major Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lang}
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
                  boxShadow: "inset 0px 0px 5px rgba(0, 0, 255, 0.2)",
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
            <MenuItem value="ReactJs">ReactJs</MenuItem>
            <MenuItem value="Html/Css">Html/Css</MenuItem>
            <MenuItem value="Html/Css/JavaScript">Html/Css/JavaScript</MenuItem>
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
  );
}

export default Selector;
