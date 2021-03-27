import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Grid } from '@material-ui/core'
import BodyCard from './BodyCard'

const cardContent = 
    {
        // avatarUrl: "https://ca-tech-challenge-web-202103.herokuapp.com/",
        // imageUrl: 
    }

function Content() {
    const [post, setPosts] = useState([])

      useEffect(() => {
        axios.get('https://ca-tech-challenge-web-202103.herokuapp.com/products')
        .then(res => {
            setPosts(res.data.data)
        })
    }, [])

    const getCardContent = getObj => {
        const bodyCardContent = {...getObj, ...cardContent};
        return (
            <Grid item xs={12} sm={4} key={getObj.id}>
                <BodyCard {...bodyCardContent} />
            </Grid>
        );
    };
    return (
        <Grid container spacing={2}>
            {post.map(contentObj => getCardContent(contentObj))}
        </Grid>
    )
}

export default Content