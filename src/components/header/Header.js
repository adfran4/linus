import React from 'react';
import { useLocation } from 'react-router-dom';

import content from '../../data/content';
import StyledHeader from './Header.styled';

const Header = () => {
  const page = useLocation().pathname;
  const messages = content[page];

  return (
    <StyledHeader>
      <h1>Step { messages.step }</h1>
      <h2>{ messages.text }</h2>
    </StyledHeader>
  );
}

export default Header;