import React from "react";
import "./styles.scss";
import { Text} from '@sitecore-jss/sitecore-jss-react';
  
const HeroSection = ({ fields }) => (
  <div className="container">
    <div className="columns is-vcentered is-desktop">
      <div className="column is-5-desktop has-text-centered-touch">
      <header className="SectionHeader__header">
        <Text tag="h1" className="title is-spaced has-text-weight-bold is-1 is-size-2-mobile" field={fields.heading} />
        </header>
        <a href="/signup">
        <button className="button is-primary is-medium">Get Started</button>
        </a>
      </div>
      <div className="column is-1" />
      <div className="column">
        <figure className="HeroSection__image image">
          <img src="https://res.cloudinary.com/sff/image/upload/v1583003301/hackathon/1_rmq7bd3GFjcwfXtkrBQaPQ_h16m7y.png" alt="Illustration" />
        </figure>
      </div>
    </div>
  </div>
)

export default HeroSection;
