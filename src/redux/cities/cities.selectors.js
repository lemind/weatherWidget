import { createSelector } from 'reselect'

const citiesListSelector = state => state.cities.list


export const sitiesIdsSelector = createSelector(
  citiesListSelector,
  items => items.reduce((acc, item) => {
  	acc.push(item.id)
  	return acc
  }, [])
)
