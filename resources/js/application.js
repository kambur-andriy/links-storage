import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import IndexController from './router/controllers/Index';
import MainReducer from './storage/MainReducer';

const middleware = [ thunk ];

const store = createStore(
    MainReducer,
    applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <IndexController />
    </Provider>,
    document.getElementById('root')
);