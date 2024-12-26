import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { reducerApp } from '../reducerApp';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducerApp, composeEnhancers(applyMiddleware(thunk)));
