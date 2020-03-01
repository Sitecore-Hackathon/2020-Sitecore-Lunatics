import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const ForgotPassSection = (props) => (
  <div>
    <p>ForgotPassSection Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default ForgotPassSection;
