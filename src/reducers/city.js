import * as city from '../constants/city';

const initialState = {
  cities: null
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case city.GET_CITY_LIST_SUCCESS:
      return {
        ...state,
        cities: action.payload
      };
    case city.GET_CITY_LIST_FAILED:
      return {
        ...state,
        cities: null
      };
    default:
      return state;
  }
}
