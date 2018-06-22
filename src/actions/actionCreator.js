import {
  GET_ITEMS,
  SET_CURITEM,
  SET_AUTHORIZATION,
  SET_GETDATA,
  LOG_OUT,
  ADD_REVIEW
} from './actionTypes';
import {
  GetItems,
   GetReviews,
   LogRegUser,
   AddReview
 } from './axiosRequests'
import {TextConstants} from '../constants/TextConstants'

export const getItems = () => dispatch => {
  dispatch({
    type: SET_GETDATA,
    payload: true
  })
  GetItems()
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
}

export const setCurItem = curItem => dispatch => {
  dispatch({
    type: SET_GETDATA,
    payload: true
  })
  GetReviews(curItem.id)
  .then(res =>
    dispatch({
      type: SET_CURITEM,
      reviews: res.data,
      curItem
    })
  )
}

export const logOut = () => ({
  type: LOG_OUT
});

export const logReg = (url, user) => dispatch => {
  dispatch({
    type: SET_GETDATA,
    payload: true
  })
  LogRegUser(url, user)
  .then(res =>{
  if (res.data.success){
    dispatch({
    type: SET_AUTHORIZATION,
    userName: user.username,
    authorization: true,
    token: res.data.token,
    getData: false
  })
}
else{
    alert(res.data.message);
    dispatch({
      type: SET_AUTHORIZATION,
      userName: '',
      authorization: false,
      getData: false,
      token: ''
    })
  }
}
)
}

export const addReview = (curItem, rate, text, token) => dispatch =>{
  dispatch({
    type: SET_GETDATA,
    payload: true
  })
AddReview(curItem, rate, text, token)
.then(res => {
if(res.data.success){
alert(TextConstants.ADDREVIEWOK);
dispatch(setCurItem(curItem))
    }
    else{
      alert(TextConstants.ADDREVIEWBAD);
      dispatch({
        type: SET_GETDATA,
        payload: false
      })
    }
  })
}
