import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  optionContainer: {
    borderRadius: "10px",
    border: "1px solid #ccc",
    padding: "10px",
    margin: "5px",
    cursor: "pointer",
    backgroundColor: "#f5f5f5",
  },
  selectedOption: {
    backgroundColor: "#FBBC05",
    color: "white",
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
  },
  button: {
    borderRadius: "10px",
    border: "2px solid #fbbc05",
    width: "100px",
    height: "40px",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "25px",
    backgroundColor: "transparent",
    boxShadow:
      "0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  nextButton: {
    color: "white",
    backgroundColor: "#fbbc05",
    "&:hover": {
      backgroundColor: "#FF8C00",
    },
  },
}));

const Mcqs = () => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    {
      label: "npm install -g create-react-app",
      value: "npm install -g create-react-app",
    },
    {
      label: "npx install create-react-app",
      value: "npx install create-react-app",
    },
    {
      label: "npm install -f create-react-app",
      value: "npm install -f create-react-app",
    },
    {
      label: "install -g create-react-app",
      value: "install -g create-react-app",
    },
  ];

  return (
    <FormControl component="fieldset">
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Question 1 of 10
      </Typography>
      <Typography variant="" style={{ marginBottom: "10px" }}>
        Which of the following command is used to install create-react-app?
      </Typography>
      <RadioGroup
        aria-label="options"
        name="options"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={`${classes.optionContainer} ${
              selectedOption === option.value ? classes.selectedOption : ""
            }`}
          >
            <FormControlLabel
              value={option.value}
              control={<Radio color="white" />} // change color to default
              label={option.label}
              labelPlacement="end"
            />
          </div>
        ))}
      </RadioGroup>
      <div className={classes.buttonContainer}>
        <Button
          className={`${classes.button} ${classes.prevButton}`}
          variant="outlined"
          onClick={() => {
            alert(
              "These features are currently static, but we plan to enable them to retrieve and post data to the backend once it is completed."
            );
          }}
        >
          Previous
        </Button>
        <Button
          className={`${classes.button} ${classes.nextButton}`}
          variant="contained"
          onClick={() => {
            alert(
              "These features are currently static, but we plan to enable them to retrieve and post data to the backend once it is completed."
            );
          }}
        >
          Next
        </Button>
      </div>
    </FormControl>
  );
};

export default Mcqs;
