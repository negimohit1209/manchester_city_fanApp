import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivataRoute({ user, component: Comp, ...rest }) {
  return (
    <Route
      {...rest}
      component={props =>
        user ? <Comp {...props} user={user} /> : <Redirect to="/signin" />
      }
    />
  );
}
