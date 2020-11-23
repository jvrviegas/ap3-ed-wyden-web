import styled from 'styled-components';

const statusColorMap = new Map([
  [1, { background: '#DFF0DF', color: '#2CA42B' }],
  [2, { background: '#BAD2FF', color: '#4D85EE' }],
  [3, { background: '#F0F0DF', color: '#C1BC35' }],
  [4, { background: '#FAB0B0', color: '#DE3B3B' }],
]);

export const MiniProfile = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const Status = styled.div`
  display: block;
  background: ${(props) => statusColorMap.get(props.status).background};
  padding: 5px 10px;
  border-radius: 12px;
  max-width: 120px;
  text-align: center;

  span {
    font-size: 14px;
    text-transform: uppercase;
    margin-left: 5px;
    font-weight: bold;
    color: ${(props) => statusColorMap.get(props.status).color};
  }
`;

export const Badge = styled.span`
  background: none;
  position: relative;

  &::after {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 3px;
    width: 10px;
    height: 10px;
    background: ${(props) => statusColorMap.get(props.status).color};
    content: '';
    border-radius: 50%;
  }
`;

export const ActionButton = styled.button`
  width: 100%;
  display: flex;
  border: 0;
  background: transparent;
  text-align: left;
  font-size: 16px;
  color: #999;
  padding: 10px 0;

  svg {
    margin-right: 5px;
  }
`;
