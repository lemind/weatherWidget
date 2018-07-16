export const actions = {
  addCity: (city) => ({
    type: 'ADD_CITY',
    city
  }),
  deleteCity: (city) => ({
    type: 'DELETE_CITY',
    city
  }),
  fetchBulkCities: (ids) => ({
    type: 'REQUEST_BULK_CITIES',
    ids
  }),
  fetchBulkCitiesSucceeded: (payload) => ({
    type: 'REQUEST_BULK_CITIES_SUCCEEDED',
    payload
  }),
  fetchBulkCitiesFailed: (error) => ({
    type: 'REQUEST_BULK_CITIES_FAILED',
    error
  }),
}