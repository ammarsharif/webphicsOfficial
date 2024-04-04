import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import graph from "../../img/graph.png";
import "./Performance.css";
function TwoPanelLayout() {
  return (
    <Grid container sx={{ height: "80vh" }}>
      <Grid item xs={4} md={4}>
        <Paper sx={{ height: "50%", display: "flex", alignItems: "center" }}>
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", mb: 2 }}>
              <Box
                sx={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "4px",
                  backgroundColor: "#eb4335",
                  mr: 1,
                }}
              />
              <Typography variant="h6" gutterBottom>
                Web Development
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "4px",
                  backgroundColor: "#34a853",
                  mr: 1,
                }}
              />
              <Typography variant="h6" gutterBottom>
                App Development
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "4px",
                  backgroundColor: "#4285f4",
                  mr: 1,
                }}
              />
              <Typography variant="h6" gutterBottom>
                UI Design
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={8} md={8}>
        <Paper sx={{ height: "80vh", marginTop: "5%" }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="graph">
              <img src={graph} alt="Graph" />
            </div>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default TwoPanelLayout;
