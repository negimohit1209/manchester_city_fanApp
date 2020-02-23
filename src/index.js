import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './Resources/css/app.css';
import Routes from './Routes';
import { firebase } from './firebase';

const App = props => {
  return (
    <BrowserRouter>
      <Routes {...props} />
    </BrowserRouter>
  );
};

firebase.auth().onAuthStateChanged(user => {
  console.log(user);
  ReactDOM.render(<App user={user} />, document.getElementById('root'));
});
