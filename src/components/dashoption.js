import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function DashOption(props) {
  let navigate = useNavigate();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{
        backgroundColor: "#F6F6F6",
        padding: "32px",
        marginBottom: "32px",
        borderRadius: 45,
      }}
    >
      <Grid item sm={6} lg={6}>
        <img
          id="projectImage"
          src={props.img}
          alt="img"
          style={{
            width: "40vh",
            display: "flex",
            justifyContent: "center",
          }}
        />
      </Grid>

      <Grid item sm={6} lg={6}>
        <Typography
          id="settingsTitle"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "600",
            fontSize: "4vh",
            textAlign: "center",
            paddingTop: "30px",
          }}
        >
          {props.title}
        </Typography>

        <Box textAlign="center">
          <Button
            className="buttonHoverEffect"
            onClick={() => {
              console.log("clicked");
              let link = "../" + props.action;
              navigate(link);
            }}
            id="contactButton"
            size="large"
            variant="contained"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textTransform: "none",
              backgroundColor: "black",
              color: "white",
              marginTop: "4%",
              boxShadow: "none",
              border: "1px solid black",
              fontFamily: "Montserrat",
            }}
          >
            Check it out!
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default DashOption;
