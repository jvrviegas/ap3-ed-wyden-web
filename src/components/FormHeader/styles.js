import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  div {
    display: flex;
    align-items: center;

    button {
      height: 36px;
      margin-left: 15px;

      svg {
        margin-right: 5px;
      }
    }

    #return {
      background: #ccc;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#ccc')};
      }
    }
  }
`;
