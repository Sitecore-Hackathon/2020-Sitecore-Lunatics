import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Footer = (props) => (
  <div>
    <p>3 Footer Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default Footer;
