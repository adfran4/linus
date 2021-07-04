import React from 'react';
import { Link } from 'react-router-dom';

import StyledProject from './Project.styled';

const Project = ({ project: { name, location }, onClick }) => {
  return(
    <StyledProject onClick={onClick}>
      <Link to='/form'>
        <h3>{name}</h3>
        <h4>{location}</h4>
      </Link>
    </StyledProject>
  );
};

export default Project;