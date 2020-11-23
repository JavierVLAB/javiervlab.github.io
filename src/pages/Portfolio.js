import React from 'react';
//import { Route, Link, Switch } from 'react-router-dom';
//import Project from './Project';
import GalleryPost from './GalleryPost';


const Portfolio = ({ data }) => (

  <section id="projects" className="bg-light-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="section-heading">Projects</h1>
        </div>
      </div>
      <div className="row project-container" id="portfolio-gallery">
        {
          data.projects.map(project => {
            return <GalleryPost key={project.id} project={project}/>
          })
        }
      </div>

    </div>
  </section>

);

export default Portfolio;
