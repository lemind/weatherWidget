import React from 'react';
import { connect } from 'react-redux'
import { setObservableConfig, renderComponent,
  compose, withHandlers, withProps, branch, nest } from 'recompose'

import { from } from 'rxjs'
setObservableConfig({
  fromESObservable: from,
  toESObservable: stream => stream,
})

import { kelvinToCelsius } from 'helpers/utils'
import AddCityButton from 'components/Buttons/AddCityButton'
import DeleteCityButton from 'components/Buttons/DeleteCityButton'
import './City.less';

export class City extends React.Component {
  render() {
    const { cityName, temp, children } = this.props;

    return (
      <div className="city">
        <div>{ cityName }</div>
        <div>{ kelvinToCelsius(temp) } &#8451;</div>
        <div className="city__buttons">{ children }</div>
      </div>
    )
  };
}

const withAddCityActionButton = branch(
  props => props.add,
  renderComponent((props) => AddCityButton(props)(props)),
);

const withDeleteCityActionButton = branch(
  props => props.delete,
  renderComponent(DeleteCityButton()),
);

export const Buttons = compose(
  withAddCityActionButton,
  withDeleteCityActionButton
)(() => <div></div>)

export const  CityWithButtons = nest(City, Buttons)