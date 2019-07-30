import { combineReducers } from 'redux';

import auth from './auth';
import ui from './ui';
import city from './city';

export default combineReducers({
  auth,
  ui,
  city
});

// redux selectors
