import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <h2>Saving Products</h2>
          <NavLink to="/" activeClassName="active">
            PRODUTOS
          </NavLink>
          <NavLink to="/list" activeClassName="active">
            LISTA DE VALIDADE
          </NavLink>
        </nav>
      </Content>
    </Container>
  );
}
