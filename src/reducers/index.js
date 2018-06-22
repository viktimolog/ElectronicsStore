import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import NavigationReducer from './navigationReducer';

const AppReducer = combineReducers({
  mainReducer,
  nav: NavigationReducer
});

export default AppReducer;
