import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Hoc/Layout';
import Home from './Components/Home';
import SignIn from './Components/SignIn';

import PrivateRoute from './Components/authroutes/privateroute';

import Dashboard from './Components/admin/Dashboard';

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <Route exact component={SignIn} path="/signin" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
