import React from 'react';
import { connect } from 'react-redux'
import { renderComponent,
  compose, branch, nest } from 'recompose'

import { kelvinToCelsius, formWeatherPicSrc } from 'helpers/utils'
import AddCityButton from 'components/Buttons/AddCityButton'
import DeleteCityButton from 'components/Buttons/DeleteCityButton'
import './City.less';

export class City extends React.Component {
  render() {
    const { cityName, temp, children, city } = this.props;
    const weather = city.weather[0];
    const imgSrc = formWeatherPicSrc(weather.icon)

    return (
      <div className="city">
        <div>{ cityName }</div>
        <div className="city__weather-info">
          <div className="city__temp">{ kelvinToCelsius(temp) } &#8451;</div>
          <div className="city__icon">
            <img src={ imgSrc } alt={ weather.main } title={ weather.main } />
          </div>
        </div>
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

export const CityWithButtons = nest(City, Buttons)