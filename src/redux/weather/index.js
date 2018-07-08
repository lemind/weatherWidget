import { actions } from './weather.actions';
import { reducer } from './weather.reducer';
import { weatherEpics } from './weather.epics';

export {
  actions as weatherActions,
  reducer as weatherReducer,
  weatherEpics,
}
