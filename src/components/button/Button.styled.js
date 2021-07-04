import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100px;
  padding: 15px;
  border: 0;
  background-color: #36354a;
  color: #fff;
  margin: 40px auto;

  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;

    a {
      cursor: not-allowed;
    }
  }
`
export default StyledButton;