import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => (

  <h3><Link to="/projects">Project {project.title}</Link></h3>

);

export default Project;
