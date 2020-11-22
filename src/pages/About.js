import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';

class About extends React.Component {

  render() {
    
    return(
      
      <section id="about">
        <Jumbotron>
          <h1>Hi, I'm Javi. I'm a creative technologist living in Madrid. I love
          make things with technology for: inspired others, created beauty and a better word...</h1>

         
        </Jumbotron>

        <Jumbotron>
          <p>I’ve been working in tech as a software engineer since 2014. Most recently, 
          I took time off industry to earn my Master's at Harvard, where I focused on 
          machine learning and visual computing. Before that, I built software at Sotheby's, 
          Squarespace, Wayfair; and made art with code at Pioneer Works. In my spare time, 
          you can catch me cooking, lifting, or saving imaginary worlds in Final Fantasy.</p>

          <p>Check out my projects page or cv to get to know me a bit better, or email and say hi. 
          Also, I'll be on the job hunt soon and am open to hearing about new opportunities!</p>

          
          
        </Jumbotron>

        <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Desarrollo Web<br/><span className="text-muted">It’ll blow your mind.</span></h2>
            <p className="lead">Desarrollo web, programacion
            </p>
          </div>
          <div className="col-md-5">
            <Image src="../img/image_about_01.jpg" className="img-fluid" alt="Responsive image" />
          </div>
        </div>

        <hr className="featurette-divider" />

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
        </div>
      </div>

      </section>
    );
  }
}

export default About;
