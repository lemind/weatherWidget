import React from 'react';

import { Observable, from } from 'rxjs'

import { setObservableConfig,
  compose, withHandlers, withProps } from 'recompose'

import { connect } from 'react-redux'

import { CityWithButtons, City } from 'components/City';

setObservableConfig({
  fromESObservable: from,
  toESObservable: stream => stream,
})


export class ViewSearchResult extends React.Component {
  render() {
  	const { searchResult, error, onChange } = this.props

    return (
      <div>
        { (searchResult || error)
          ? searchResult
              ? <CityWithAddButton
                  cityName={ searchResult.name }
                  temp={ searchResult.main.temp }
                  city={ searchResult }
                />
              : 'No results'
          : ''
        }
      </div>
    )
  };
}

const CityWithAddButton = withProps({ add:true })(CityWithButtons);

export default compose(
  connect(
    (state) => ({
      searchResult: state.weather.searchResult,
      error: state.weather.error,
    })
  )
)(ViewSearchResult);
