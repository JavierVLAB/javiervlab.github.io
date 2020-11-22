import React from 'react';
//import { Route, Link, Switch } from 'react-router-dom';
//import Project from './Project';
import GalleryPost from './GalleryPost';


const Portfolio = ({ data }) => (

  <section id="projects" className="bg-light-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Projects</h2>
          {/*<h3 className="section-subheading text-muted">Last years' projects</h3>*/}
        </div>
      </div>
      <div className="row" id="portfolio-gallery">
        {
          data.projects.map(project => {
            return <GalleryPost key={project.id} project={project}/>
          })
        }

 
<div class="col-xs-12 col-sm-6 col-md-3 project_square">

<div class="project_square_background">
  <a href={data.projects[0].id}>
    <img alt="hola" src={`${data.projects[1].imageUrl}`} class="project_square_images" style={{opacity: 1}}/>
  <p className="project_text" style={{opacity: 0}}>SUNDAE SCHOOL INSTALLATION: NEW YORK FASHION WEEK 2019</p></a>
  </div>
</div>
</div>

    </div>
  </section>

);

export default Portfolio;
