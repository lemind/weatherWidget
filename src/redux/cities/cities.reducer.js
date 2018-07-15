
export const initialState = {
  list: [],
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
    default:
      return state
  }
}
