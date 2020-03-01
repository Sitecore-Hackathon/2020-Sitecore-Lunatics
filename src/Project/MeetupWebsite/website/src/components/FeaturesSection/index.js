import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const FeaturesSection = (props) => (
  <div>
    <p>FeaturesSection Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default FeaturesSection;
