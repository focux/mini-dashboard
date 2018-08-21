import React from 'react';
import { Grid } from '@material-ui/core';
import { Title, Logo } from './elements';

const Home = () => (
  <Grid container justify="center" align="center" direction="column" spacing={24} style={{height: '100%'}}>
  <Grid container justify="center" align="center">
    <Logo src="https://firebasestorage.googleapis.com/v0/b/applebees-5f865.appspot.com/o/images%2Fap-logo.png?alt=media&token=5715035e-72e0-4ed5-962b-f078259266d1" alt="Applebees" />
  </Grid>
  <Grid item>
   <Title>Panel de administrador Applebees</Title>
  </Grid>
  </Grid>
);

export default Home;