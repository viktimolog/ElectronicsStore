import {
  SET_CURITEM,
  GET_ITEMS,
  SET_AUTHORIZATION,
  LOG_OUT,
  SET_GETDATA
 } from '../actions/actionTypes';

const initialState = {
   items: [],
   curItem: {},
   reviews: [],
   authorization: false,
   token: '',
   getData: true,
   userName: ''    
  };

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_ITEMS: {
        return {
          ...state,
           items: action.payload,
           getData: false
         }
      }

      case SET_CURITEM: {
        return {
           ...state,
           curItem: action.curItem,
           reviews: action.reviews,
           getData: false
         }
      }

      case SET_AUTHORIZATION: {
        return {
           ...state,
           authorization: action.authorization,
           userName: action.userName,
           getData: action.getData,
           token: action.token
         }
      }

      case LOG_OUT: {
        return {
           ...state,
            userName: '',
            token: '',
            authorization: false,
            getData: false
          }
      }

      case SET_GETDATA:{
        return{
          ...state,
           getData: action.payload
        }
      }

    default:
      return state;
  }
};

export default mainReducer;
