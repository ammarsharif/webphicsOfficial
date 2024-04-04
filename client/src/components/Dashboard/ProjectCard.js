import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DashDate from "./DashDate";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{
                fontSize: 20,
                border: "2px solid #FFD68A",
                backgroundColor: "#FFD68A",
                paddingY: 2,
                paddingX: 3,
                display: "inline-block",
                minWidth: 100,
                borderRadius: 3,
              }}
              gutterBottom
            >
              {props.major}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Poppins",
                color: "#696969",
              }}
            >
              <b>{props.title}</b>
            </Typography>
          </CardContent>
        </React.Fragment>
        <DashDate date={props.date} />
      </Card>
      <button
        type="download"
        className="btn bg-light btn-lg registerGoogle mt-1"
        style={{
          fontSize: "small",
          borderRadius: "10px",
          marginLeft: "150px",
        }}
        onClick={() => {
          alert(
            "We are currently in the process of downloading the uploaded content."
          );
        }}
      >
        Download <AiOutlineArrowDown />
      </button>
    </Box>
  );
}
