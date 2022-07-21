import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import BootstrapNavbar from "../components/NavBarBootstrap";
import Footer from "../components/footer";
import Calendar from "../components/Calendar";
import Timer from "../components/Time";

function Booking() {
  return (
    <>
      <BootstrapNavbar />
      <Container maxWidth="sm" sx={{ mb: "30vh", mt: "10vh" }}>
        <Grid container spacing={2}>
          <Typography variant="h2">Book an appointment</Typography>
        </Grid>
        <Grid item xs={12} justifyContent="center" textAlign="center">
          <Button
            id="nohrefHover"
            variant="contained"
            className="sendButton"
            href="/contact"
          >
            {" "}
            Send Request{" "}
          </Button>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Booking;
