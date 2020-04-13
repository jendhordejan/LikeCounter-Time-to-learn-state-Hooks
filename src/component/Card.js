import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import IconButton from "@material-ui/core/IconButton";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";

import LikeCounter from "./LikeCounter";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.cardInfo.image}
            title={props.cardInfo.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.cardInfo.type}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.cardInfo.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <LikeCounter />
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
