import React from 'react';
import { Route } from 'react-router-dom';
import Project from './Project'

const GalleryPost = ({project}) => (

	<div className="col-xs-12 col-sm-6 col-md-4 project_square">
		<div className="project_square_background">
		{project.link ? (
			<a href={project.link} target="_blank" rel="noreferrer">
				<img
				alt={project.title}
				src={project.imageUrl}
				className="project_square_images"
				/>
				<p className="project_text">
				{project.title}
				<br />
				<span className="project-category">{project.category}</span>
				</p>
			</a>
			) : (
			<div className="project_no_link">
				<img
				alt={project.title}
				src={project.imageUrl}
				className="project_square_images"
				/>
				<p className="project_text">
				{project.title}
				<br />
				<span className="project-category">{project.category}</span>
				</p>
			</div>
			)}

			<Route path={`project${project.id}`} component={Project} />
		</div>
	</div>

);

export default GalleryPost;
