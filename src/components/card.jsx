import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import ServiceDialog from "../components/ServiceDialog";
import { RedirectProvider } from "../components/RedirectContext";
import { useState } from "react";

export default function MultiActionAreaCard(props) {
  const [modal, setModal] = useState(false);

  function handleDialogClose() {
    setModal(false);
  }
  function handleDialogOpen() {
    setModal(true);
  }

  return (
    <>
      <Card
        className="serviceCards"
        sx={{ display: "inline-block", margin: "2%", width: "300px" }}
      >
        <CardMedia
          component="img"
          height="200"
          image={props.imgURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ fontFamily: "Montserrat", fontWeight: "500" }}
          >
            {props.service}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            sx={{
              textTransform: "none",
              paddingTop: 0,
              paddingLeft: "3%",
              fontFamily: "Montserrat",
            }}
            onClick={(e) => {
              e.preventDefault();
              handleDialogOpen();
            }}
          >
            Book now
          </Button>
        </CardActions>
      </Card>
      <RedirectProvider>
        <ServiceDialog open={modal} close={handleDialogClose} />
      </RedirectProvider>
    </>
  );
}
