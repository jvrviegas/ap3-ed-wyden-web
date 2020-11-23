import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch, MdAdd } from 'react-icons/md';

import { SearchField } from './styles';

import history from '~/services/history';

export default function ContentHeader({ title = '', page }) {
  function handleCreate() {
    if (page) {
      return history.push(`/${page}/create`);
    }

    return history.push('/');
  }

  return (
    <div>
      <SearchField>
        <MdSearch size={20} color="#999" />
        <input type="text" name="filter" placeholder={`Buscar por ${title}`} />
      </SearchField>
      <button type="button" onClick={handleCreate}>
        <MdAdd size={24} />
        Cadastrar
      </button>
    </div>
  );
}

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string,
};

ContentHeader.defaultProps = {
  page: '',
};
