import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { mapTo, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { pipe } from 'rxjs';
import { ofType } from 'redux-observable';

import { actions } from './cities.actions';
import { storage } from 'helpers/storage';
import { API } from 'api';

export const citiesEpics = {};

citiesEpics.addCityEpic = action$ =>
  action$.pipe(
    ofType('ADD_CITY'),
    map((item) => {
      storage.saveCity(item.city)
      return item
    }),
    catchError(error => {
      //ToDo: error
      return of([])
    }),
    mapTo({ type: 'ADDED_CITY' })
  );

citiesEpics.deleteCityEpic = action$ =>
  action$.pipe(
    ofType('DELETE_CITY'),
    map((item) => {
      storage.deleteCity(item.city)
      return item
    }),
    catchError(error => {
      //ToDo: error
      return of([])
    }),
    mapTo({ type: 'DELETED_CITY' })
  );

citiesEpics.fetchCitiesEpic = action$ =>
  {
    return action$.ofType('REQUEST_BULK_CITIES')
      .mergeMap(action => {
        if (action.ids) {
          return API.weatherBulkCities(action.ids)
            .map(response => {
              return actions.fetchBulkCitiesSucceeded(response.list)
            })
            .catch(error => {
              if (error.response.cod === '404') {
                return of(actions.fetchBulkCitiesFailed({ ...error.response }))
              } else {
                // ToDo: catch this one
                throw new Error({ type: 'request', error: error.response });
              }
            });
        }
      });
  }
