import React from 'react';

import { setObservableConfig, componentFromStream, createEventHandler,
  compose, withHandlers, mapPropsStream } from 'recompose'
import rxjsConfig from 'recompose/rxjsObservableConfig'

// import './Cities.less';

setObservableConfig(rxjsConfig)

import Rx from 'rxjs'

export default class Cities extends React.Component {

  render() {
    return (
      <div> Cities
      </div>
    )
  };
}
