import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const ContentCards = (props) => (
  <div>
    <p>ContentCards Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default ContentCards;
