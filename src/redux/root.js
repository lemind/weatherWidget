import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { weatherReducer, weatherEpics } from './weather';

export const rootReducer = combineReducers({
  weather: weatherReducer
});

export const rootEpic = combineEpics(
  weatherEpics.fetchWeatherEpic
);
