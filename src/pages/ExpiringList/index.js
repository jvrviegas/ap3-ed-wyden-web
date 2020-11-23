/* eslint-disable no-alert */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useCallback } from 'react';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import { Status, Badge } from './styles';

import api from '~/services/api';
import orderStatus from '~/utils/orderStatus';

export default function ExpiringList() {
  const [queues, setQueues] = useState([]);

  const loadOrders = useCallback(async () => {
    const response = await api.get(`/queue/list`);

    const data = response.data.map((order) => ({
      ...order,
      status: orderStatus(order),
    }));
    console.tron.log(data);

    setQueues(data);
  }, []);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  async function handleDelete() {
    const confirm = window.confirm(
      `Deseja realmente retirar o produto da lista?`
    );
    if (confirm) {
      if (queues.length > 0) {
        await api.delete(`/queue/delete/${queues[0].product.id}`);
        toast.success('Produto removido com sucesso!');
        loadOrders();
      }
    }
  }

  return (
    <>
      <h2>Gerenciando lista de produtos</h2>

      {queues && queues.length > 0 && (
        <div>
          <button type="button" onClick={() => handleDelete()}>
            <MdDeleteForever size={24} color="#DE3B3B" />
            Remover produto
          </button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Data de validade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {queues.map((queue) => (
            <tr key={queue.id}>
              <td>#{queue.id < 10 ? `0${queue.id}` : queue.id}</td>
              <td>{queue.product.name}</td>
              <td>{format(parseISO(queue.expiring_date), 'dd/MM/yyyy')}</td>
              <td>
                <Status status={queue.status.id}>
                  <Badge status={queue.status.id} />
                  <span>{queue.status.name}</span>
                </Status>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

ExpiringList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
