import React, { useState } from 'react';
import { useSelector } from "react-redux";

import { sendInvestment } from '../../store/actions/investment';
import { Button } from '../../components';
import { Loader } from '../../components';
import StyledRow from './ConfirmPageRow.styled';

const ConfirmPage = () => {
  const { email, amount } = useSelector(state => state.investment);
  const { id, name } = useSelector(state => state.projects.selected);
  const [ termsAccepted, toggleTerms ] = useState(false);
  const [ success, toggleRequestResult ] = useState(true);
  const [ formMessage, createMessage ] = useState('');
  const [ loading, onLoad ] = useState(false);

  const confirmInvestment = () => {
    const investment = {
      project_id: id,
      email: email,
      investment_amount: amount
    };

    if (termsAccepted) {
      createMessage('');
      onLoad(true);
      sendInvestment(success, investment)
        .then(data => { 
          createMessage(data);
          onLoad(false);
        })
        .catch(e => {
          createMessage(e);
          onLoad(false);
        });
    } else {
      createMessage('Please accept the terms and conditions.')
    }
  }

  return (
    <React.Fragment>
      <StyledRow >
        <p>project:</p>
        <p>{name}</p>
      </StyledRow> 
      <StyledRow >
        <p>email:</p>
        <p>{email}</p>
      </StyledRow>
      <StyledRow >
        <p>amount:</p>
        <p>{amount}</p>
      </StyledRow>
      <StyledRow>
        <input 
          name='terms' 
          type='checkbox' 
          id='terms' 
          onChange={() => toggleTerms(!termsAccepted)} 
        />
        <label htmlFor='html'>
          I accept the terms and conditions
        </label>
      </StyledRow>
      <StyledRow>
        <input 
          name='request' 
          type='checkbox' 
          id='request' 
          onChange={() => toggleRequestResult(!success)} 
        />
        <label htmlFor='html'>
          Check if you want to failed the request (dev only)
        </label>
      </StyledRow>
      <StyledRow >
        <Button onClick={() => confirmInvestment()}>
          Invest
        </Button>
      </StyledRow>
      <Loader isActive={loading} />
      { formMessage }
    </React.Fragment>
  );
}

export default ConfirmPage;
