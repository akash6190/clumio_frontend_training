import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { createStore, Middleware, applyMiddleware } from 'redux';
import appReducer from './store';
import {Provider} from 'react-redux';

const loggerMiddleware: Middleware = store => next => action => {
  console.group(action.type)
  console.log('action:: ', action);
  console.log('current state:: ', store.getState());
  next(action)
  console.log('new state:: ', store.getState());
  console.groupEnd()
}

// const logMiddleware2 = store => next => action  => {
//   console.log('logMiddleware2');
// }

export const store = createStore(appReducer, applyMiddleware(loggerMiddleware));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
