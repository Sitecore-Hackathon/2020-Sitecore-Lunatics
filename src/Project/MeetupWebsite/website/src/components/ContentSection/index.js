import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const ContentSection = (props) => (
  <div>
    <p>ContentSection Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default ContentSection;
