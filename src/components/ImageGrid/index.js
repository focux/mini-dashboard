import React from 'react';
import { Grid } from '@material-ui/core';
import ImageCard from './ImageCard';

const ImageGrid = ({ data }) => (
  <Grid container item xs={12} spacing={8} style={{height: '100%'}}>
    {data.map((v, k) => 
      <Grid item xs={3} key={k}>
        <ImageCard url={v.url} name={v.name} />
      </Grid>
    )}
  </Grid>
);

export default ImageGrid;