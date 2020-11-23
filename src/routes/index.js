import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '~/pages/Dashboard';
import ExpiringList from '~/pages/ExpiringList';
import ProductForm from '~/pages/ProductForm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/list" isPrivate component={ExpiringList} />
      <Route path="/product/create" isPrivate component={ProductForm} />
    </Switch>
  );
}
