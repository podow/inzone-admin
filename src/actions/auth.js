import axios from 'axios';
import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILED,
  AUTH_LOGOUT,
  RECEIVE_AUTH_REQUEST,
  RECEIVE_AUTH_SUCCESS,
  RECEIVE_AUTH_FAILED
} from '../constants/auth';

export function auth(email, password) {
  return dispatch => {
    dispatch({
      type: AUTH_REQUEST
    });

    return axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        hash: password
      }
    }).then(({ data: { user } }) => {
      const { token } = user;
      localStorage.setItem('token', token);

      dispatch({
        type: AUTH_SUCCESS,
        payload: { token, user }
      })
    }).catch(reason => dispatch({
      type: AUTH_FAILED,
      reason
    }));
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('token');

    return dispatch({
      type: AUTH_LOGOUT
    })
  }
}

export function receiveAuth() {
  return dispatch => {
    const token = localStorage.getItem('token');

    if (!token) {
      dispatch({
        type: RECEIVE_AUTH_FAILED
      })
    }

    dispatch({
      type: RECEIVE_AUTH_REQUEST
    });

    return axios({
      method: 'GET',
      url: '/api/v1/users/current',
      headers: {
        Authorization: `Token ${token}`
      }
    }).then(({ data: { user } }) => {
      const { token } = user;
      localStorage.setItem('token', token);

      dispatch({
        type: RECEIVE_AUTH_SUCCESS,
        payload: { token, user }
      })
    }).catch(reason => dispatch({
      type: RECEIVE_AUTH_FAILED,
      reason
    }))
  }
}
