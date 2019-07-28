import { OPEN_DRAWER, CLOSE_DRAWER } from '../constants/ui';

const initialState = {
  isDrawerOpen: true
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case CLOSE_DRAWER:
      return {
        ...state,
        isDrawerOpen: false
      };
    case OPEN_DRAWER:
      return {
        ...state,
        isDrawerOpen: true
      };
    default:
      return state;
  }
}

