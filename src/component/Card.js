import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Title } from "@mui/icons-material";
import "./Style.css";

function Cards({ data }) {
  console.log("da2", data);

  return (
    data &&
    data?.map((e) => {
      return (
        <div className="allcard">
          <div>
            <Card sx={{ maxWidth: 345 }}>
              {/* <CardMedia
          component="img"
          alt="green iguana"
          height="140"
         >
           {e.price}
        </CardMedia> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <img className="imag" src={e.image} />
                  <br/>
                  {e.price}$
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 
                  {e.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      );
    })
  );
}

export default Cards;
