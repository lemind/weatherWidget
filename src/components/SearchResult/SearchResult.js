import React from 'react';

import { Observable, from } from 'rxjs'

import { setObservableConfig,
  compose, withHandlers, withProps } from 'recompose'

import { connect } from 'react-redux'

import { CityWithButtons, City } from 'components/City';
import { citiesSelectors } from 'src/redux/cities';

setObservableConfig({
  fromESObservable: from,
  toESObservable: stream => stream,
})

const getActive = (sitiesIdsSelector, searchResult) => {
  if (!searchResult) {
    return true
  }

  return sitiesIdsSelector.indexOf(searchResult.id) === -1
}

export function ViewSearchResult(props) {
  const { searchResult, error, onChange, sitiesIdsSelector } = props

  return (
    <div>
      { (searchResult || error)
        ? searchResult
            ? <CityWithAddButton
                cityName={ searchResult.name }
                temp={ searchResult.main.temp }
                city={ searchResult }
                active={ getActive(sitiesIdsSelector, searchResult) }
              />
            : 'No results'
        : ''
      }
    </div>
  )
}

const CityWithAddButton = withProps({ add:true })(CityWithButtons);

export default compose(
  connect(
    (state) => ({
      searchResult: state.weather.searchResult,
      error: state.weather.error,
      sitiesIdsSelector: citiesSelectors.sitiesIdsSelector(state)
    })
  )
)(ViewSearchResult);
