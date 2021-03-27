import React from 'react';
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

const useStyles = makeStyles({
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
});


function BodyCard(props) {
    const { category, description, id, image, price, title } = props;
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    let state = false;
    let button = <StarBorderOutlinedIcon />;

    const handleStarState = () => {
        state = !state;
        console.log(state);
        console.log(button.type);
        if(state){
            button = <StarIcon />;
        } else {
            button = <StarBorderOutlinedIcon />;
        }
    }


    return (
        <Card variant="outlined">
            <CardHeader
                action={
                <IconButton aria-label="star" onClick={handleStarState}>
                    {button}
                </IconButton>
                }
                title={title}
            />
            <CardMedia className={classes.media} image={image} />
            <CardContent>
            <Typography variant="body1" component="p">
                {description}
            </Typography>
            <Typography variant="h5" component="p">
                PRICE : {price}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">詳細をみる</Button>
            </CardActions>
        </Card>
    );
}


export default BodyCard