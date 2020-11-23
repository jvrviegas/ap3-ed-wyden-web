import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Pagination({ page, limit, previous, next }) {
  return (
    <Container>
      <button type="button" disabled={page === 1} onClick={previous}>
        Anterior
      </button>
      <span>Página {page}</span>
      <button type="button" disabled={limit} onClick={next}>
        Próxima
      </button>
    </Container>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  limit: PropTypes.bool.isRequired,
};
