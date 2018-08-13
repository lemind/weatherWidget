
export const initialState = {
  loading: false,
  error: null,
  searchCurrentTerm: '',
  searchResult: null,
  defaultCityCoordinates: null,
  defaultCityResult: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_SEARCH_BY_TERM':
      return {
        ...state,
        loading: true,
        searchCurrentTerm: action.term
      };
    case 'REQUEST_SEARCH_BY_TERM_SUCCEEDED':
      return {
        ...state,
        searchResult: action.payload,
        loading: false
      };
    case 'REQUEST_SEARCH_BY_TERM_FAILED':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case 'REQUEST_SEARCH_BY_COORDINATES':
      return {
        ...state,
        loading: true,
        defaultCityCoordinates: action.coordinates
      };
    case 'REQUEST_SEARCH_BY_COORDINATES_SUCCEEDED':
      return {
        ...state,
        defaultCityResult: action.payload,
        loading: false
      };
    case 'REQUEST_SEARCH_BY_COORDINATES_FAILED':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}
