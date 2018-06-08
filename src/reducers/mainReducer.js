import {
  incrementCounter,
  decrementCounter,
  SET_CURITEM,
  GET_ITEMS,
  SET_AUTHORIZATION
 } from '../actions/actionTypes';

const initialState = {
   items: [],
   curItem: {},
   reviews: [],
   authorization: false,
   token: '',
   getData: true,
   userName: '',
    counter: 0
  };

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case incrementCounter:
      return { ...state, counter: state.counter + 1 };

    case decrementCounter:{
      return { ...state, counter: state.counter - 1 };
    }

      case GET_ITEMS: {
        return { ...state, items: action.payload}
      }

      case SET_CURITEM: {
        return {
           ...state,
           curItem: action.curItem,
           reviews: action.payload
         }
      }

      case SET_AUTHORIZATION: {
        return {
           ...state,
           authorization: action.authorization,
           userName: action.userName,
           getData: action.getData
         }
      }

    default:
      return state;
  }
};

export default mainReducer;
