import React from 'react';

import StyledProject from './Project.styled';

const Project = ({ project: { name, location } }) => {
  return(
    <StyledProject>
      <h3>{name}</h3>
      <h4>{location}</h4>
    </StyledProject>
  );
};

export default Project;