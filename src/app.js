import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createEpicMiddleware } from 'redux-observable';

import styles from './app.less';

import { Main } from './components/Main/Main';

import { rootReducer, rootEpic } from 'src/redux/root';

const epicMiddleware = createEpicMiddleware();

const middleware = process.env.NODE_ENV
  ? applyMiddleware(epicMiddleware)
  : composeWithDevTools(
    applyMiddleware(epicMiddleware)
  );

epicMiddleware.run(rootEpic)

const store = createStore(
  rootReducer,
  middleware
);

const renderApp = () => (
  render(
    <div className="container">
      <Main />
    </div>,
    document.getElementById('app')
  )
);

renderApp();