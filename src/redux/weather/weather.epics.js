import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';

import { actions } from './weather.actions';
import { API } from 'api';

export const weatherEpics = {};

weatherEpics.fetchWeatherEpic = action$ =>
  {
    return action$.ofType('REQUEST_SEARCH_BY_TERM')
      .mergeMap(action => {
        if (action.term) {
          return API.weatherByTerm(action.term)
            .map(response => {
              return actions.searchByTermSucceeded(response)
            })
            .catch(error => {
              if (error.response.cod === '404') {
                return of(actions.searchByTermFailed({ ...error.response }))
              } else {
                // ToDo: catch this one
                throw new Error({ type: 'request', error: error.response });
              }
            });
        }
      });
  }

weatherEpics.fetchWeatherCoordEpic = action$ =>
  {
    return action$.ofType('REQUEST_SEARCH_BY_COORDINATES')
      .mergeMap(action => {
        if (action.coordinates) {
          return API.weatherByCoordinates(action.coordinates)
            .map(response => {
              return actions.searchByCoordinatesSucceeded(response)
            })
            .catch(error => {
              if (error.response.cod === '404') {
                return of(actions.searchByCoordinatesFailed({ ...error.response }))
              } else {
                // ToDo: catch this one
                throw new Error({ type: 'request', error: error.response });
              }
            });
        }
      });
  }
