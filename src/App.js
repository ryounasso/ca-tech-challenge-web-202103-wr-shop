import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header'
import Content from './components/Content';
import Typography from '@material-ui/core/Typography'
import { fontSize } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import ScrollUp from './utils/ScrollUp'
import { classes } from 'istanbul-lib-coverage';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  fonts:{
    '@media (min-width:400px)' :{
    fontSize : '50px',
  }
}
});

function App() {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>

        <Grid item
          style={{
            margin : '30px',
          }}>
          <Box display='flex' justifyContent='center' P={3}>
            <Typography className={classes.fonts}>CA TECH CHALLENGE STORE</Typography>
          </Box>
        </Grid>

        <Grid item p={3}>
          <Content />
        </Grid>

      </Grid>
    
    <ScrollUp />
    <Box p={2}></Box>
   </>
  );
}

export default App;
