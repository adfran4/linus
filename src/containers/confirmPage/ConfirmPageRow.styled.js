import styled from 'styled-components';

const ConfirmPageStyledRow = styled.div`
  display: flex;
  width: 35%;
  margin: 0 auto;
  align-items: center;

  & input, label {
    margin-top: 30px;
  }

  & p:first-of-type {
    font-weight: bold;
    width: 100px;
    text-align: left;
  }
`
export default ConfirmPageStyledRow;