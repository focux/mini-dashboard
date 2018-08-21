import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { CustomNavLink, ListItem } from './elements';

const MenuItem = ({ icon, name, path }) => (
  <ListItem>
  <CustomNavLink exact to={path}>
    <Grid container justify="space-between">
      <Grid item>{icon}</Grid>
      <Hidden smDown><Grid item>{name}</Grid></Hidden>
    </Grid>
  </CustomNavLink>
  </ListItem>
);

export default MenuItem;