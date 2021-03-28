import React, {useState, useEffect, useRef, useCallback} from 'react';
import axios from 'axios';

import { Grid } from '@material-ui/core'
import BodyCard from './BodyCard'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Header from './Header'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'


const cardContent = {}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    margins : {
        marginBottom : '20px',
    },
    sliderLength : {
        width : 300,
    },
    paper: {
        marginRight: theme.spacing(2),
      },
}));

function Content() {
    const classes = useStyles();
    const [post, setPosts] = useState([])
    const [open, setOpen] = React.useState(false);
    const [tag, setTag] = React.useState("");
    const anchorRef = React.useRef(null);

    function sortPrice() {
        axios.get('https://ca-tech-challenge-web-202103.herokuapp.com/products?sort=desc&sortKey=price')
        .then(res => {
            setPosts(res.data.data)
        })
    }

    function sortDefault() {
        axios.get('https://ca-tech-challenge-web-202103.herokuapp.com/products')
        .then(res => {
            setPosts(res.data.data)
        })
    }

      useEffect(() => {
        axios.get('https://ca-tech-challenge-web-202103.herokuapp.com/products')
        .then(res => {
            setPosts(res.data.data)
        })
    }, [])

    useEffect(() => {
        console.log(tag);
        if (tag==='all'){
            axios.get('https://ca-tech-challenge-web-202103.herokuapp.com/products')
            .then(res => {
                setPosts(res.data.data)
            })
        } else {
            axios.get('https://ca-tech-challenge-web-202103.herokuapp.com/products?category='+tag)
            .then(res => {
                setPosts(res.data.data)
            })
        }
    }, [tag])

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    const getCardContent = getObj => {
        const bodyCardContent = {...getObj, ...cardContent};
        return (
            <Grid item xs={12} sm={4} key={getObj.id}>
                <BodyCard {...bodyCardContent} />
            </Grid>
        );
    };

    return (
        <>
            <Header setTag={setTag} />
            <Box display='flex' justifyContent='center' p={10}>
                    <Typography variant='h3'>CA TECH CHALLENGE STORE</Typography>
            </Box>
            <Button variant="contained" onClick={sortDefault} className={classes.margins}>Default</Button>
            <Button variant="contained" onClick={sortPrice} className={classes.margins}>Sort by price</Button>
            <div>
        </div>
            <Grid container spacing={1}>
                {post.map(contentObj => getCardContent(contentObj))}
            </Grid>
        </>
    )
}

export default Content;