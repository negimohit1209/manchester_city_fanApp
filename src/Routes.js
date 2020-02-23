import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Hoc/Layout';
import Home from './Components/Home';
import SignIn from './Components/SignIn';

import Dashboard from './Components/admin/Dashboard';

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Dashboard} path="/dashboard" />
        <Route exact component={SignIn} path="/signin" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
