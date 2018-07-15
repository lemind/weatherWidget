import { actions } from './cities.actions';
import { reducer } from './cities.reducer';
import { citiesEpics } from './cities.epics';
import { sitiesIdsSelector } from './cities.selectors';

const citiesSelectors = {
    sitiesIdsSelector
  }

export {
  actions as citiesActions,
  reducer as citiesReducer,
  citiesEpics,
  citiesSelectors
}
