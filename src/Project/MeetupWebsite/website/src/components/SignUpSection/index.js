import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';



const SignUpSection = (props) => (
  
  <section className="SectionComponent hero section is-block is-relative is-white is-large">
  <div className="container">
  <header className="SectionHeader__header is-centered">
    <Text tag="h1" className="title is-spaced has-text-weight-bold is-3" field={props.fields.heading} />
    <Text tag="p" className="subtitle" field={props.fields.subHeading} />
    </header>
<div className="Auth">
<form>
   <div className="field">
      <div className="control">
        <input className="input is-medium" type="email" placeholder="Email" />
      </div>
   </div>
   <div className="field">
      <div className="control">
        <input className="input is-medium" type="password" placeholder="Password" />
      </div>
   </div>
   <div className="field">
      <div className="control">
        <input className="input is-medium" type="password" placeholder="Confirm Password" />
      </div>
   </div>
</form>
<br />
  <div className="field">
      <p className="control">
        <a href="/dashboard">
        <button className="button is-primary is-medium is-normal is-fullwidth">Join SUG</button>
        </a>
      </p>
   </div>
   <div className="Auth__bottom-link has-text-centered">Have an account already?<a href="/signin"> Sign in</a></div>
</div>
</div>
</section>


);

export default SignUpSection;