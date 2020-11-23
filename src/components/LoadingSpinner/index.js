import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

export default function LoadingSpinner() {
  return (
    <Container>
      <FaSpinner size={30} />
    </Container>
  );
}
