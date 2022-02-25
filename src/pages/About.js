import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';

class About extends React.Component {

  render() {
    
    return(
      
      <section id="about">
        <Jumbotron>
          <h1>Hi, I'm Javier.</h1>
          <h1>A Software Developer based in Madrid.</h1>
          <h2>Specialized on creating experiences and prototyping devices with technologies.</h2>

         
        </Jumbotron>

        <Jumbotron>

          <p>I'm Ph.D. in Physics that spent many years working across different technologies.
          Lately, I develop myself in more creative technologies such as Digital Fabrication, 
          Physical Computing and coding. Next are detailed some of my offering services</p>
          
        </Jumbotron>

        <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Software Development</h2>
            <p className="lead">Recently, I develop my skill in coding oriented in web development. I offer
            development of website based in
            </p>
          </div>
          <div className="col-md-5">
            <Image src="../img/image_about_01.jpg" className="img-fluid" alt="Responsive image" />
          </div>
        </div>

        {/*<hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" 
                  width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" 
                  focusable="false" role="img" aria-label="Placeholder: 500x500">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#eee"/>
                    <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
            </svg>
          </div>
        </div>*/}
      </div>

      </section>
    );
  }
}

export default About;
