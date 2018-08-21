import React from 'react';
import Edit from '@material-ui/icons/Edit';
import { Card, CardImage, CardOverlay } from './elements';

const ImageCard = ({ url, name }) => (
  <Card>
    <CardOverlay><Edit /></CardOverlay>
    <CardImage src={url} alt={name} />
  </Card>
);

export default ImageCard;