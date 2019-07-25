import {
  AUTH_SUCCESS,
  RECEIVE_AUTH_SUCCESS,
  AUTH_FAILED,
  RECEIVE_AUTH_FAILED,
  AUTH_LOGOUT
} from '../constants/auth';

const token = localStorage.getItem('token');

const initialState = {
  isAuthenticated: !!token,
  user: null,
  token
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
    case RECEIVE_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case AUTH_FAILED:
    case RECEIVE_AUTH_FAILED:
    case AUTH_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: '',
      };
    default:
      return state;
  }
}
