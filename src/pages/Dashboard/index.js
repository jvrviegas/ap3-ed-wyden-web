/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useCallback } from 'react';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import { MdAdd, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import LoadingSpinner from '~/components/LoadingSpinner';

import { Status, Badge, ActionButton } from './styles';

import api from '~/services/api';
import orderStatus from '~/utils/orderStatus';

export default function Dashboard({ history }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadOrders = useCallback(async () => {
    setLoading(true);

    const response = await api.get(`/products/list`);

    const data = response.data.map((product) => ({
      ...product,
      status: orderStatus(product),
    }));

    setProducts(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  async function addToQueue(product) {
    const confirm = window.confirm(
      `Deseja realmente adicionar o produto à lista de validades?`
    );
    if (confirm) {
      await api.post(`/queue/add`, {
        product_id: product.id,
        expiring_date: product.expiring_date,
      });
      toast.success('Produto adicionado com sucesso!');
      loadOrders();
    }
  }

  async function handleDelete(id) {
    const confirm = window.confirm(`Deseja realmente excluir o produto?`);
    if (confirm) {
      await api.delete(`/product/${id}`);
      toast.success('Produto excluído com sucesso!');
      loadOrders();
    }
  }

  return (
    <>
      <h2>Gerenciando produtos</h2>

      <div>
        <button type="button" onClick={() => history.push('/product/create')}>
          <MdAdd size={24} />
          Cadastrar
        </button>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Produto</th>
              <th>Data de validade</th>
              <th>Lote</th>
              <th>Estado</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product.id}>
                  <td>#{product.id < 10 ? `0${product.id}` : product.id}</td>
                  <td>{product.name}</td>
                  <td>
                    {format(parseISO(product.expiring_date), 'dd/MM/yyyy')}
                  </td>
                  <td>{product.lote}</td>
                  <td>
                    <Status status={product.status.id}>
                      <Badge status={product.status.id} />
                      <span>{product.status.name}</span>
                    </Status>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flex: 1,
                      }}
                    >
                      <ActionButton
                        type="button"
                        onClick={() => addToQueue(product)}
                      >
                        <MdAdd size={16} color="#2CA42B" />
                        <span>Adicionar à lista</span>
                      </ActionButton>
                      <ActionButton
                        type="button"
                        onClick={() => handleDelete(product.id)}
                      >
                        <MdDeleteForever size={16} color="#DE3B3B" />
                        <span>Excluir</span>
                      </ActionButton>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
}

Dashboard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
