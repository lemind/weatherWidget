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

const middleware = process.env.NODE_ENV !== 'development'
  ? applyMiddleware(epicMiddleware)
  : composeWithDevTools(
    applyMiddleware(epicMiddleware)
  );

const store = createStore(
  rootReducer,
  middleware
);

epicMiddleware.run(rootEpic)

const renderApp = () => (
  render(
    <Provider store={ store }>
      <div className="container">
        <h3>Weather Widget</h3>
        <Main />
      </div>
    </Provider>,
    document.getElementById('app')
  )
);

renderApp();