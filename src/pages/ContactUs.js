import { Button, Typography, Grid } from "@mui/material";
import React from "react";

function ContactUs() {
  return (
    <>
      <Grid
        style={{ marginTop: "5vh" }}
        container
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h1"> Contact Us </Typography>
      </Grid>
      <Grid container alignItems="center" justifyContent="center">
        <Button variant="contained">EMAIL</Button>
      </Grid>
    </>
  );
}

export default ContactUs;
