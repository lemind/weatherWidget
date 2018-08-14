import React from 'react';
import { setObservableConfig,
  compose, withHandlers, withProps, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { Observable, from } from 'rxjs'
setObservableConfig({
  fromESObservable: from,
  toESObservable: stream => stream,
})

import { storage } from 'helpers/storage';
import { API } from 'api';
import { weatherActions } from 'src/redux/weather/index';
import './DefaultCity.less';

export class DefaultCity extends React.Component {
  render() {
    const defaultCity = this.props.defaultCity
    const { clickHeader } = this.props
    return (
      <div className="default__city">
        { defaultCity && 
        <div className="info">Is 
        <span
          className="cityName"
          onClick={ () => clickHeader(defaultCity.name) }
        >{ defaultCity.name }</span>
         your current city?</div>}
      </div>
    )
  };
}

export default compose(
  connect(
    (state) => ({
      defaultCity: state.weather.defaultCityResult,
    }),
    (dispatch) => ({
      searchByCoordinates: (coordinates) => {
        return dispatch(weatherActions.searchByCoordinates(coordinates))
      },
      searchByTerm: (currentTerm) => {
        return dispatch(weatherActions.searchByTerm(currentTerm))
      }
    })
  ),
  withHandlers({
    clickHeader: ({ searchByTerm }) => (name) => {
      searchByTerm(name);
    },
  }),
  lifecycle({
    componentDidMount() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition => {
          this.props.searchByCoordinates({
            lat: showPosition.coords.latitude,
            lon: showPosition.coords.longitude
          })
        });
      }

    },
  })
)(DefaultCity);