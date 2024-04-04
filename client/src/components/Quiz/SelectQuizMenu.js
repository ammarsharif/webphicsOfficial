import React from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  ThemeProvider,
  createTheme,
} from "@mui/material";
function SelectQuizMenu() {
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
    <div
      className="col-3 mx-5"
      style={{
        color: "#FBBC05",
      }}
    >
      <ThemeProvider theme={theme}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Choose Test Catagory
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Choose Catagory "
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
            <MenuItem value={10}>Web Development</MenuItem>
            <MenuItem value={20}>App Development</MenuItem>
            <MenuItem value={30}>Website Designing</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  );
}

export default SelectQuizMenu;
