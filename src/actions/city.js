import axios from 'axios';

import * as city from '../constants/city';

export const getList = () => {
  return (dispatch, getState) => {
    dispatch({
      type: city.GET_CITY_LIST_REQUEST
    });

    if (getState().city) {
      return dispatch({
        type: city.GET_CITY_LIST_SUCCESS
      })
    }

    return axios({
      method: 'GET',
      url: '/api/v1/cities'
    }).then( data => dispatch({
      type: city.GET_CITY_LIST_SUCCESS,
      payload: data.data.data
    })).catch(reason => dispatch({
      type: city.GET_CITY_LIST_FAILED,
      reason
    }))
  }
};

export const add = (data) => {
  return (dispatch, getState) => {
    const token = getState().auth.token || localStorage.getItem('token');

    dispatch({
      type: city.ADD_CITY_REQUEST
    });

    return axios({
      method: 'POST',
      url: '/api/v1/cities',
      data,
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(data => dispatch({
        type: city.ADD_CITY_SUCCESS
      }))
      .catch(reason => dispatch({
        type: city.ADD_CITY_FAILED,
        reason
      }));
  };
};
