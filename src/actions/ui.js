import { OPEN_DRAWER, CLOSE_DRAWER } from '../constants/ui';

export const toggleDrawer = () => {
  return (dispatch, getState) => {
    const { isDrawerOpen } = getState().ui;

    if (isDrawerOpen) {
      return dispatch({
        type: CLOSE_DRAWER
      })
    }

    return dispatch({
      type: OPEN_DRAWER
    })
  }
};
