import axios from 'axios';

export const add = (data) => {
  return (dispatch, getState) => {
    const token = getState().auth.token || localStorage.getItem('token');

    dispatch({
      type: 'ADD_CITY_REQUEST'
    });

    return axios({
      method: 'POST',
      url: '/api/v1/cities',
      data,
      headers: {
        Authorization: `Token ${token}`
      }
    }).then(() => {
      dispatch({
        type: 'ADD_CITY_SUCCESS'
      })
    }).catch(reason => dispatch({
      type: 'ADD_CITY_FAILED',
      reason
    }));
  };
};
