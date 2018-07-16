import React from 'react';
import { setObservableConfig,
  compose, withHandlers, withProps, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { Observable, from } from 'rxjs'
setObservableConfig({
  fromESObservable: from,
  toESObservable: stream => stream,
})

import { CityWithButtons, City } from 'components/City';
import { citiesActions } from 'src/redux/cities';
import { storage } from 'helpers/storage';
import './Cities.less';

export class CitiesView extends React.Component {

  render() {
    const { cities } = this.props

    return (
      !!cities.length && <div className="cities">
        <div className="cities__title">Your cities</div>
        <div className="cities__list">
          { !!cities.length && cities.map((city, i) => (
            <CityWithAddButton
              cityName={ city.name }
              temp={ city.main.temp }
              city={ city }
              key={ i }
            />
          ))}
        </div>
      </div>
    )
  };
}

const CityWithAddButton = withProps({ delete:true })(CityWithButtons);

export default compose(
  connect(
    (state) => ({
      cities: state.cities.list
    }),
    (dispatch) => ({
      fetchBulkCities: (ids) => {
        return dispatch(citiesActions.fetchBulkCities(ids))
      }
    })
  ),
  lifecycle({
    componentDidMount() {
      const ids = storage.getCitiesIds();
      if (ids && ids.length) {
        this.props.fetchBulkCities(ids)
      }
    }
  })
)(CitiesView);