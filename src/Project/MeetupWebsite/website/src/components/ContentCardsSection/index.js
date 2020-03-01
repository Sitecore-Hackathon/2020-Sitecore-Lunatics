import React from "react";
import "./styles.scss";

import { Text } from '@sitecore-jss/sitecore-jss-react';

const ContentCardsSection = ({ fields }) => (

  <div className="container">
   <header className="SectionHeader__header is-centered">
      <Text tag="h1" className="title is-spaced has-text-weight-bold is-3" field={fields.heading} />
   </header>
   <div className="columns is-centered is-variable is-4 is-multiline">
      <div className="column is-half-tablet is-one-quarter-desktop">
         <a className="ContentCards__card card is-flex" href="/meetups/houston">
            <div className="card-image">
               <figure className="image is-4by3">
                  <img src="https://res.cloudinary.com/sff/image/upload/v1583001136/hackathon/macys_header_image_houston2_rgangt.jpg" alt="Cloud Infrastructure" />
               </figure>
            </div>
            <div className="card-content">
               <div className="content">
                  <h4>Houston User Group</h4>
                  <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.</p>
               </div>
            </div>
         </a>
      </div>
      <div className="column is-half-tablet is-one-quarter-desktop">
         <a className="ContentCards__card card is-flex" href="/meetups/portland">
            <div className="card-image">
               <figure className="image is-4by3"><img src="https://res.cloudinary.com/sff/image/upload/v1583001173/hackathon/Drone.__72_20DPI_jmr0pe.jpg" alt="Headless Architecture" /></figure>
            </div>
            <div className="card-content">
               <div className="content">
                  <h4>Portland User Group</h4>
                  <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.</p>
               </div>
            </div>
         </a>
      </div>
      <div className="column is-half-tablet is-one-quarter-desktop">
         <a className="ContentCards__card card is-flex" href="/meetups/atlanta">
            <div className="card-image">
               <figure className="image is-4by3"><img src="https://res.cloudinary.com/sff/image/upload/v1583001193/hackathon/636335665341170000_v7rkn5.jpg" alt="Mobile Development" /></figure>
            </div>
            <div className="card-content">
               <div className="content">
                  <h4>Atlanta User Group</h4>
                  <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.</p>
               </div>
            </div>
         </a>
      </div>
      <div className="column is-half-tablet is-one-quarter-desktop">
         <a className="ContentCards__card card is-flex" href="/meetups/london">
            <div className="card-image">
               <figure className="image is-4by3"><img src="https://res.cloudinary.com/sff/image/upload/v1583001112/hackathon/http_3A_2F_2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws_grnknh.jpg" alt="Connected Home" /></figure>
            </div>
            <div className="card-content">
               <div className="content">
                  <h4>London User Group</h4>
                  <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.</p>
               </div>
            </div>
         </a>
      </div>
   </div>
</div>
)

export default ContentCardsSection;