import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const CardsSection = (props) => (
  <div>
    <p>CardsSection Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default CardsSection;
