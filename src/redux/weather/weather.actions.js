export const actions = {
  searchByTerm: (term) => ({
    type: 'REQUEST_SEARCH_BY_TERM',
    term
  }),
  searchByTermSucceeded: (payload) => ({
    type: 'REQUEST_SEARCH_BY_TERM_SUCCEEDED',
    payload
  }),
  searchByTermFailed: (error) => ({
    type: 'REQUEST_SEARCH_BY_TERM_FAILED',
    error
  }),
  searchByCoordinates: (coordinates) => ({
    type: 'REQUEST_SEARCH_BY_COORDINATES',
    coordinates
  }),
  searchByCoordinatesSucceeded: (payload) => ({
    type: 'REQUEST_SEARCH_BY_COORDINATES_SUCCEEDED',
    payload
  }),
  searchByCoordinatesFailed: (error) => ({
    type: 'REQUEST_SEARCH_BY_COORDINATES_FAILED',
    error
  }),
}
