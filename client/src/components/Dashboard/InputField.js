import React, { useState } from "react";
import { TextField, Stack } from "@mui/material";
function InputField(props) {
  const [inputField, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
    //   console.log(event.target.value);
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };
  return (
    <div className="mb-2 offset-1 col-5">
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Please ensure that you have chosen file."
            type="text"
            value={inputField}
            name="creator"
            className="form-control "
            aria-describedby="emailHelp"
            onChange={handleChange}
            disabled
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "white",
                color: "FBBC05",
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
          />
        </Stack>
      </Stack>
    </div>
  );
}

export default InputField;
