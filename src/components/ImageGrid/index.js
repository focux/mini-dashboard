import React from 'react';
import { Grid } from '@material-ui/core';
import ImageCard from './ImageCard';

const ImageGrid = ({ data, onClick, isUploading, clickedImageId }) => (
  <Grid container item xs={12} spacing={8} style={{height: '100%'}}>
    {data.map((v, k) => 
      <Grid item xs={6} sm={4} md={3} key={k}>
        <ImageCard
          url={v.url}
          name={v.name}
          onClickOverlay={onClick}
          isUploading={isUploading}
          clickedImageId={clickedImageId}
          id={v._id}
        />
      </Grid>
    )}
  </Grid>
);

export default ImageGrid;