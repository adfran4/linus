import React from 'react';
import styled from 'styled-components';

import routes from './routes';
import Header from './components/header/Header';

const StyledApp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 50%;
margin: 5% auto;
padding: 0 0 40px;
background-color: #d0d7df;
`

const App = () => {
  return (
    <StyledApp>
      <Header />
      { routes() }
    </StyledApp>
  );
}

export default App;
