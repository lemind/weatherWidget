
export const initialState = {
  list: [],
  loading: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return {
        ...state,
        list: [...state.list, action.city],
      };
    case 'DELETE_CITY':
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.city.id),
      };
    case 'REQUEST_BULK_CITIES':
      return {
        ...state,
        loading: true,
      };
    case 'REQUEST_BULK_CITIES_SUCCEEDED':
      return {
        ...state,
        list: [...action.payload],
        loading: false
      };
    case 'REQUEST_BULK_CITIES_FAILED':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}
