import React from 'react';
import Edit from '@material-ui/icons/Edit';
import { Card, CardImage, CardOverlay, CardOverlayText } from './elements';

const ImageCard = ({ url, name }) => (
  <Card>
    <CardOverlay>
      <Edit />
      <CardOverlayText>{name}</CardOverlayText>
    </CardOverlay>
    <CardImage src={url} />
  </Card>
);

export default ImageCard;