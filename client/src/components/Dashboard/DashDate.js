import React from "react";
import CardActions from "@mui/material/CardActions";
import { BsCalendarDate } from "react-icons/bs";
import Typography from "@mui/material/Typography";

function DashDate(props) {
  const currentDate = new Date();
  const month = (props.date ?? currentDate).toLocaleString("en-US", {
    month: "long",
  });
  const day = (props.date ?? currentDate).toLocaleString("en-US", {
    day: "2-digit",
  });
  const year = (props.date ?? currentDate).getFullYear();
  const formattedDate = [month, day, year].join(" ");

  return (
    <div>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <BsCalendarDate sx={{}} />
          <div className="expense-date">&nbsp;{formattedDate}</div>
        </Typography>
      </CardActions>
    </div>
  );
}

export default DashDate;
