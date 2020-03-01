import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Dashboard = (props) => (
  <div>
    <p>Dashboard Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default Dashboard;
