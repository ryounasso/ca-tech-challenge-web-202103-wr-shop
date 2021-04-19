import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import Content from "./components/Content";
import Typography from "@material-ui/core/Typography";
import { fontSize } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import ScrollUp from "./utils/ScrollUp";
import { classes } from "istanbul-lib-coverage";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  return (
    <>
      <Grid container direction="column">
        <Grid item p={3}>
          <Content />
        </Grid>
      </Grid>

      <ScrollUp />
      <Box p={2}></Box>
    </>
  );
}

export default App;
