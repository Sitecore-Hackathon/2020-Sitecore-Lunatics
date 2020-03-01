import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const SignInSection = (props) => (
  <div>
    <p>SignInSection Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default SignInSection;
