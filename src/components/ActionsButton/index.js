/* eslint-disable no-alert */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import history from '~/services/history';

import { Container, ActionsList, MoreActions, Action } from './styles';

export default function ActionsButton({
  actions,
  larger,
  page,
  data,
  callback,
}) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
    console.tron.log(data);
  }

  function handleAction(action) {
    if (action === 'Editar' && data) {
      history.push({
        pathname: `/${page}/create`,
        state: data,
      });
    }

    if (action === 'Excluir' || action === 'Cancelar encomenda') {
      const confirm = window.confirm(
        `Deseja realmente ${action.toLowerCase()}?`
      );
      if (confirm) {
        callback();
      }
    }

    return null;
  }

  return (
    <Container>
      <MoreActions onClick={handleToggleVisible}>
        <MdMoreHoriz color="#C6C6C6" size={20} />
      </MoreActions>

      <ActionsList visible={visible} larger={larger}>
        <div>
          {actions.map((action) =>
            action === 'Visualizar' ? (
              <Action onClick={() => handleAction(action)}>
                <MdVisibility size={16} color="#8E5BE8" />
                <span>{action}</span>
              </Action>
            ) : action === 'Editar' ? (
              <Action onClick={() => handleAction(action)}>
                <MdCreate size={16} color="#4D85EE" />
                <span>{action}</span>
              </Action>
            ) : (
              <Action onClick={() => handleAction(action)}>
                <MdDeleteForever size={16} color="#DE3B3B" />
                <span>{action}</span>
              </Action>
            )
          )}
        </div>
      </ActionsList>
    </Container>
  );
}

ActionsButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  actions: PropTypes.arrayOf(PropTypes.string).isRequired,
  page: PropTypes.string.isRequired,
  larger: PropTypes.bool,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  callback: PropTypes.func.isRequired,
};

ActionsButton.defaultProps = {
  larger: false,
};
