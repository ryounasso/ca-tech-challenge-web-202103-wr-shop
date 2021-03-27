import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { CardMedia, Container } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import ModalButton from './ModalButton';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
    //   padding: theme.spacing(2, 4, 3),
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
          backgroundSize : 'contain',
      },
      card: {
          '@media (min-width:400px)': {
              height: '570px',
            },
      },
      margins: {
          marginBottom: '12px',
      },
  }));


function Details(props) {
    const { category, description, id, image, price, title } = props;
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card variant="outlined">
            <CardHeader
                title={title}
            />
            <CardMedia className={classes.media} image={image} />
            <CardContent>
            <Typography variant="body1" component="p">
                {description}
            </Typography>
            <Typography variant="h5" component="p">
                ￥ {price}
            </Typography>
            </CardContent>
        </Card>
    );
}


export default Details;