import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { mapTo } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { pipe } from 'rxjs';
import { ofType } from 'redux-observable';

import { actions } from './cities.actions';

export const citiesEpics = {};

citiesEpics.addCityEpic = action$ =>
  action$.pipe(
    ofType('ADD_CITY'),
    mapTo({ type: 'ADDED_CITY' })
  );

citiesEpics.deleteCityEpic = action$ =>
  action$.pipe(
    ofType('DELETE_CITY'),
    mapTo({ type: 'DELETED_CITY' })
  );


