import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const DashboardSection = (props) => (
  <div>
    <p>DashboardSection Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default DashboardSection;
