import React from 'react';
import { setObservableConfig,
  compose, withHandlers, withProps } from 'recompose'
import { connect } from 'react-redux'

import { CityWithButtons, City } from 'components/City';
import './Cities.less';

setObservableConfig({
  fromESObservable: from,
  toESObservable: stream => stream,
})

import { Observable, from } from 'rxjs'

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
    })
  )
)(CitiesView);