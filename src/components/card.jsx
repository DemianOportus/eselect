import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard(props) {
  return (
    <Card
      className="serviceCards"
      sx={{ display: "inline-block", margin: "2%", width: "300px" }}
    >
      <CardActionArea href={props.path}>
        <CardMedia
          component="img"
          height="200"
          image={props.imgURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.service}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem Ipsum
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          href="/booking"
          size="small"
          color="primary"
          sx={{ textTransform: "none", paddingLeft: "3%" }}
        >
          Book now
        </Button>
      </CardActions>
    </Card>
  );
}
