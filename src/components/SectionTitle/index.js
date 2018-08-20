import React from 'react';
import { Title } from './elements';

const SectionTitle = ({ children, color = 'black' }) => (
  <Title color={color}>{children}</Title>
);

export default SectionTitle;