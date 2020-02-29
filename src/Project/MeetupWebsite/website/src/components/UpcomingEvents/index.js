import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const UpcomingEvents = (props) => (

  <div className="container">
   <header className="SectionHeader__header is-centered">
      <Text tag="h1" className="title is-spaced has-text-weight-bold is-3" field={props.fields.heading} />
   </header>

   <div className="tile is-ancestor">
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-primary">
          <p className="title">Content Hub</p>
          <p className="subtitle">Utilize the best DAM</p>
        </article>
        <article className="tile is-child notification is-warning">
          <p className="title">Sitecore JSS</p>
          <p className="subtitle">Build fast blazing sites</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">Commerce</p>
          <p className="subtitle">Headless Commerce</p>
          <figure className="image is-4by3">
          </figure>
          
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-danger">
        <p className="title">Build sites with SXA and Scriban</p>
        <p className="subtitle">Sitecore Experience Accellerator</p>
        <div className="content">
        </div>
      </article>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-success">
      <div className="content">
        <p className="title">Sitecore 9.3 </p>
        <p className="subtitle">Installation with docker</p>
        <div className="content">
        </div>
      </div>
    </article>
  </div>
</div>
</div>
);

export default UpcomingEvents;
