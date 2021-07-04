import React from 'react';

import StyledLoader from './Loader.styled';

const Loader = ({ isActive }) => {
  if (isActive) {
    return (
      <StyledLoader>
        Sending...
      </StyledLoader>
    );
  } 

  return null;
};

export default Loader;