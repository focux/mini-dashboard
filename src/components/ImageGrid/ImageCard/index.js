import React from 'react';
import Edit from '@material-ui/icons/Edit';
import { Card, CardImage, CardOverlay, CardOverlayText } from './elements';
import { CircularProgress } from '@material-ui/core';

const ImageCard = ({ url, name, onClickOverlay, isUploading, id, clickedImageId }) => (
  <Card>
    <CardOverlay onClick={onClickOverlay(id)} isUploading={isUploading && clickedImageId === id ? true : false}>
      {isUploading && clickedImageId === id ? <CircularProgress /> : <Edit />}
      <CardOverlayText>{name}</CardOverlayText>
    </CardOverlay>
    <CardImage src={url} />
  </Card>
);

export default ImageCard;