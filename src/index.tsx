
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './App';
import { register } from './ServiceWorker';


ReactDOM.render(
    <App />,
    document.getElementById('root'),
);

register();
