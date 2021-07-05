import React from 'react';

import routes from './routes';
import StyledApp from './App.styled';
import Header from './components/header/Header';

const App = () => {
  return (
    <StyledApp>
      <Header />
      { routes() }
    </StyledApp>
  );
}

export default App;
