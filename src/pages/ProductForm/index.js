/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';

import FormHeader from '~/components/FormHeader';
import LoadingSpinner from '~/components/LoadingSpinner';

import { Container, Content } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  expiring_date: Yup.string().required('Campo obrigatório'),
  lote: Yup.number(),
});

export default function ProductForm({ history }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit({ name, expiring_date, lote }) {
    try {
      setLoading(true);
      await api.post('/products/create', {
        name,
        expiring_date,
        lote,
      });

      setLoading(false);
      toast.success('Produto criado com sucesso');

      history.push('');
    } catch (err) {
      toast.error('Falha ao processar, por favor verifique os dados');
      setLoading(false);
    }
  }

  return (
    <Container>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Form schema={schema} onSubmit={handleSubmit}>
          <FormHeader title="Cadastro de produtos" page="" />

          <Content>
            <label>Nome</label>
            <Input name="name" placeholder="Produto X" />

            <label>Data de validade</label>
            <Input name="expiring_date" placeholder="12/02/2020" />

            <label>Lote</label>
            <Input type="number" name="lote" placeholder="0001" />
          </Content>
        </Form>
      )}
    </Container>
  );
}

ProductForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
