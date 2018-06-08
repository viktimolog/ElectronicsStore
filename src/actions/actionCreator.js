import {
  incrementCounter,
  decrementCounter,
  GET_ITEMS,
  SET_CURITEM,
  SET_AUTHORIZATION,
  SET_GETDATA
} from "./actionTypes";
import {
  GetItems,
   GetReviews,
   LogRegUser
 } from './axiosRequests'
// import Urls from '../constants/Urls';

export const incrementAction = () => ({
  type: incrementCounter
});

export const decrementAction = () => ({
  type: decrementCounter
});

export const getItems = () => dispatch => {
  GetItems()
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
}

export const setCurItem = curItem => dispatch => {
  GetReviews(curItem.id)
  .then(res =>
    dispatch({
      type: SET_CURITEM,
      payload: res.data,
      curItem
    })
  )
}

export const logReg = (url, user) => dispatch => {
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
};

// export const login = user => dispatch => {
//   LoginUser(user)
//   .then(res =>{
//   if (res.data.success){
//     dispatch({
//     type: SET_AUTHORIZATION,
//     userName: user.username,
//     authorization: true,
//     getData: false
//   })
// }
// else{
//     alert(res.data.message);
//     dispatch({
//       type: SET_AUTHORIZATION,
//       userName: '',
//       authorization: false,
//       getData: false
//     })
//   }
// }
// )
// };
