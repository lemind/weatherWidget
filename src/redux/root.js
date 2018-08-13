import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { weatherReducer, weatherEpics } from './weather';
import { citiesReducer, citiesEpics } from './cities';

export const rootReducer = combineReducers({
  weather: weatherReducer,
  cities: citiesReducer
});

export const rootEpic = combineEpics(
  weatherEpics.fetchWeatherEpic,
  weatherEpics.fetchWeatherCoordEpic,
  citiesEpics.addCityEpic,
  citiesEpics.deleteCityEpic,
  citiesEpics.fetchCitiesEpic
);
