import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { CardMedia, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    //   padding: theme.spacing(2, 4, 3),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain",
  },
  card: {
    "@media (min-width:400px)": {
      height: "570px",
    },
  },
  margins: {
    marginBottom: "12px",
    marginLeft: "16px",
  },
}));

function Details(props) {
  const { category, description, id, image, price, title } = props;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card variant="outlined">
      <CardHeader title={title} />
      <Typography variant="body1" component="p" className={classes.margins}>
        CATEGORY : {category}
      </Typography>
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
        <Typography variant="h5" component="p">
          $ {price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Details;
