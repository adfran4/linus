import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% { opacity: 0 }
  10% { opacity: 0.1 }
  20% { opacity: 0.2 }
  30% { opacity: 0.3 }
  40% { opacity: 0.4 }
  50% { opacity: 0.5; }
  60% { opacity: 0.6; }
  70% { opacity: 0.7 }
  80% { opacity: 0.8 }
  90% { opacity: 0.9 }
  100% { opacity: 1 }
`
const StyledLoader = styled.div`
  color: #36354a;
  font-weight: bold;
  letter-spacing: 1px;
  animation: ${animation} 1.5s ease infinite;
`
export default StyledLoader;