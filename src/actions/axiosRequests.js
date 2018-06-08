import Urls from '../constants/Urls'
import axios from 'axios'

//get All Items
export const GetItems = () => {
  return axios.get(Urls.products)
}

export const GetReviews = itemId => {
    return axios.get(Urls.reviews + itemId)
}

// Register User
export const LogRegUser = (url, user) => {
  return axios.post(url, user)
}

// // Register User
// export const RegisterUser = user => {
//   return axios.post(Urls.reg, user)
// }
//
// // Login User
// export const LoginUser = user => {
//   return axios.post(Urls.log, user)
// }


// Login - Get User Token
// export const loginUser = userData => dispatch => {
//   axios
//     .post('/api/users/login', userData)
//     .then(res => {
//       // Save to localStorage
//       const { token } = res.data;
//       // Set token to ls
//       localStorage.setItem('jwtToken', token);
//       // Set token to Auth header
//       setAuthToken(token);
//       // Decode token to get user data
//       const decoded = jwt_decode(token);
//       // Set current user
//       dispatch(setCurrentUser(decoded));
//     })
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };



  // logReg = (url, username, password) => {
  //     username = username.trim();
  //     password = password.trim();
  //     if (username === '' || password === '') {
  //         alert('Fill both fields, please!');
  //         return;
  //     }
  //     this.setState({getData: true});
  //     fetch(url, {
  //         method: 'POST',
  //         headers: {'Content-Type': 'application/json'},
  //         body: JSON.stringify({username, password})
  //     })
  //         .then(response => response.json())
  //         .then(responseObj => {
  //                 if (responseObj.success) {
  //                     this.setState({
  //                         authorization: responseObj.success,
  //                         token: responseObj.token,
  //                         getData: false,
  //                         userName: username
  //                     })
  //                 }
  //                 else{
  //                     alert(responseObj.message);
  //                     this.setState({getData: false});
  //                 }
  //             }
  //         )
  // }


// //Update worker
// export const UpdateWorker = selectedWorker => {
//   return axios.put(Urls.updateWorker + selectedWorker._id, selectedWorker)
// }

// // Delete Worker
// export const DelWorker = id => {
//   return axios.delete(Urls.delWorker + id)
// }

// // Add Worker
// export const AddWorker = newWorker => {
//   return axios.post(Urls.addWorker, newWorker)
// }
