import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    h2 {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #999;
      transition: color 0.2s;

      &.active {
        color: #333;
      }

      &:hover {
        color: #333;
      }

      & + a {
        margin-left: 15px;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: center;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
      font-size: 14px;
    }

    button {
      background: transparent;
      border: 0;
      margin-top: 5px;
      font-size: 14px;
      color: #de3b3b;
      transition: color 0.2s;

      &:hover {
        color: #b50707;
      }
    }
  }
`;
