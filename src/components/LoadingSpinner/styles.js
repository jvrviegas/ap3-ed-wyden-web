import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  margin: 0 auto;

  svg {
    animation: ${rotate} 2s linear infinite;
    margin: 50px auto;
  }
`;
