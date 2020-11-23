import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 30px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(1, minmax(200px, 900px));

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    width: 100%;
    height: 40px;
  }
`;
