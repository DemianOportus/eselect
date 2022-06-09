import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, display: "inline-block"}}>
      <CardActionArea href={props.path}>
        <CardMedia
          component="img"
          height="140"
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
        <Button href= "/booking"size="small" color="primary" sx={{textTransform: "none"}}>
          Book now
        </Button>
      </CardActions>
    </Card>
  );
}



