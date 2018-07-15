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
}
