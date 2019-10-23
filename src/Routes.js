import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Hoc/Layout';
import Home from './Components/Home';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Home} path='/' />
      </Switch>
    </Layout>
  )
}

export default Routes;
