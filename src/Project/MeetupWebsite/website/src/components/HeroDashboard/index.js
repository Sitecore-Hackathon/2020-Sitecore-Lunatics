import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const HeroDashboard = (props) => (

  <div className="container">
  <div className="columns is-vcentered is-desktop">
    <div className="column is-12-desktop has-text-centered-touch">
    <header className="SectionHeader__header">
      <Text tag="h1" className="title is-spaced has-text-weight-bold is-1 is-size-2-mobile" field={props.fields.heading} />
      <Text tag="h3" className="is-spaced has-text-weight-bold is-1 is-size-2-mobile" field={props.fields.sHeading} />
      </header>
    </div>
    <div className="column is-1" />

  </div>
</div>
);

export default HeroDashboard;