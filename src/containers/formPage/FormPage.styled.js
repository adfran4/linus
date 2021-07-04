import styled from 'styled-components';

const StyledForm = styled.form`
  & input {
    display: block;
    padding: 10px;
    border-radius: 5px;
    margin: 20px 10px;
    width: 300px;
  }

  & input[type=number] {
    width: 250px;
  }

  & .currency-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &:last-child {
    margin: 0 auto;
  }
`
export default StyledForm;