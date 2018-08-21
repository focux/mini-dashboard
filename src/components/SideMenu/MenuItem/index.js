import React from 'react';
import { Grid } from '@material-ui/core';
import { CustomNavLink, ListItem } from './elements';

const MenuItem = ({ icon, name, path }) => (
  <ListItem>
  <CustomNavLink exact to={path}>
    <Grid container justify="space-between">
      <Grid item>{icon}</Grid>
      <Grid item>{name}</Grid>
    </Grid>
  </CustomNavLink>
  </ListItem>
);

export default MenuItem;