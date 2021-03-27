import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header'
import Content from './components/Content';

function App() {
  return (
    <Grid container direction="column">
       <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <div>
          <p>Hello React.</p>
        </div>
      </Grid>
      <Grid item>
        <div>
          <p>Hello React.</p>
        </div>
      </Grid>

      <Grid item>
        <Content />
      </Grid>

    </Grid>
   
  );
}

export default App;
