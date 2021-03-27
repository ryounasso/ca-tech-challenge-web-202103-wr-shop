import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header'
import Content from './components/Content';
import Typography from '@material-ui/core/Typography'
import { fontSize } from '@material-ui/system';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <Grid container direction="column">
       <Grid item>
        <Header />
      </Grid>

      <Grid item
        style={{
          margin : '30px',
        }}>
        <Box display='flex' justifyContent='center' P={3}>
          <Typography variant="h2">CA TECH CHALLENGE STORE</Typography>
        </Box>
      </Grid>

      <Grid item p={3}>
        <Content />
      </Grid>

    </Grid>
   
  );
}

export default App;
