import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  min-height: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 80%;
  margin: 50px auto;
  min-width: 600px;

  display: flex;
  flex-direction: column;

  h2 {
    color: #444;
    font-size: 24px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin-top: 34px;
    padding: 5px 0;

    button {
      display: flex;
      padding: 0 20px;
      border: 0;
      border-radius: 4px;
      background: #4d85ee;
      color: #fff;
      font-weight: bold;

      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#4D85EE')};
      }
    }
  }

  table {
    width: 100%;
    border-spacing: 0 21px;

    thead th {
      color: #444;
      text-align: left;
      padding: 0 12px;
    }

    tbody td {
      border-color: transparent;
      background: #fff;
      color: #666;
      padding: 6px 12px;
      border-radius: 4px;
      height: 57px;

      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
    }
  }

  form {
    label {
      text-align: left;
      display: block;
      font-weight: bold;
      margin: 5px 0 10px;
      font-size: 13px;
      color: #333;
    }

    input {
      display: block;
      border: 1px solid #eee;
      border-radius: 4px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;

      &::placeholder {
        color: #999;
      }
    }
  }

  div.search-field {
    height: 36px;
    display: flex;
    align-items: center;
    background: #fff;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #eee;

    input {
      height: 100%;
      border: 0;
      margin-left: 10px;
    }
  }

  div.empty-list {
    margin: 50px auto;
    color: #333;

    > span {
      font-size: 18px;
    }
  }
`;
