import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const MoreActions = styled.button`
  background: none;
  border: 0;
  position: relative;
`;

export const ActionsList = styled.aside`
  position: absolute;
  min-width: 140px;
  width: max-content;
  left: calc(50% - (${(props) => (props.larger ? `${93}px` : `${65}px`)}));
  top: calc(100% + 8px);
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  padding: 5px 10px;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  border: 1px solid #eee;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% + 3px);
    top: 2px;
    width: 0;
    height: 0;

    box-sizing: border-box;

    transform-origin: 0 0;
    transform: rotate(135deg);

    border: 5px solid black;
    border-color: transparent transparent #fff #fff;
    box-shadow: -2px 2px 2px #0000001a;
    opacity: 1;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Action = styled.button`
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

  & + button {
    border-top: 1px solid #eee;
  }
`;
