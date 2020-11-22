import React from 'react';
import { Link, Route } from 'react-router-dom';
import Project from './Project'

const GalleryPost = ({project}) => (

  <div className="col-md-4 col-sm-6 portfolio-item">
  	<Link to={`project${project.id}`} className="portfolio-link" data-toggle="modal">
      <div className="portfolio-hover">
    		<div className="portfolio-hover-content">
    			<i className="fa fa-plus fa-3x"></i>
    		</div>
    	</div>
    	<img src={project.imageUrl} className="img-responsive" alt=""/>
    </Link>
    <Route path={`project${project.id}`} component={Project} />
  	<div className="portfolio-caption"><h4>{project.title}</h4>
  	<p className="text-muted">{project.category}</p>
  	</div>
  </div>
);

export default GalleryPost;
