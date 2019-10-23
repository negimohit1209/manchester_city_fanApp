import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './Resources/css/app.css';
import Routes from './Routes';

const App = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
}

ReactDOM.render(App(), document.getElementById('root'));