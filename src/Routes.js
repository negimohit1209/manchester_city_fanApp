import React from 'react';
import { Switch } from 'react-router-dom';
import Layout from './Hoc/Layout';
import Home from './Components/Home';
import SignIn from './Components/SignIn';

import PrivateRoute from './Components/authroutes/privateroute';
import PublicRoute from './Components/authroutes/publicroute';

import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches';

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <PublicRoute
          {...props}
          path="/signin"
          exact
          component={SignIn}
          restricted
        />
        <PublicRoute {...props} path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
