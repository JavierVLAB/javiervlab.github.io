import React from 'react';
//import ContactForm from '../components/Form.js';


const IconLink = props => {
  const { name, url } = props;
  return <a aria-label={name} href={url} target="_blank" rel="noopener noreferrer">
          <i className={`fa fa-${name} fa-2x`} aria-hidden="true"/>
        </a>;
};

const Contact = () => (
  <section id="contact">
    <div className="container">
      {/*<ContactForm />*/}
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="section-heading contact-heading">Find me in...</h1>
          {/*<h3 className="section-subheading text-muted">Networks where you can find me</h3>*/}
        </div>
      </div>
      <div className="social_icons social">
        <IconLink name="envelope" url="mailto:javier.villarroel.f@gmail.com" />
        <IconLink name="linkedin" url="https://www.linkedin.com/in/javier-villarroel-freites" /> 
        <IconLink name="instagram" url="https://www.instagram.com/javilifelabs/" />
        <IconLink name="github-alt" url="https://www.github.com/JavierVlab" />
      </div>
    </div>
  </section>
);

export default Contact;



