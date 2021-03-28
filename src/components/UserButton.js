import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Grid } from '@material-ui/core'
import Details from './Details'

const cardContent = {}

function UserButton(props) {

    const id = props.pathId;
    const [post, setPosts] = useState([])

      useEffect(() => {
        axios.get('https://ca-tech-challenge-web-202103.herokuapp.com/users/')
        .then(res => {
            setPosts(res.data.data)
        })
    }, [])

    const getCardContent = getObj => {
        const bodyCardContent = {...getObj, ...cardContent};
        return (
            <Grid key={getObj.id}>
                <Details {...bodyCardContent} />
            </Grid>
        );
    };
    return (
        <Grid container>
            {getCardContent(post)}
        </Grid>
    )
}

export default UserButton;