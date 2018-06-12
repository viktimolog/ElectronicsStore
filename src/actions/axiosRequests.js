import Urls from '../constants/Urls'
import axios from 'axios'

//get All Items
export const GetItems = () => {
  return axios.get(Urls.products)
}

export const GetReviews = itemId => {
    return axios.get(Urls.reviews + itemId)
}

// Login - Register User
export const LogRegUser = (url, user) => {
  return axios.post(url, user)
}

//Add Review
export const AddReview = (curItem, rate, text, token) => {
  const data = {
  rate,
  text
}

return axios.
post(Urls.reviews + curItem.id, data,{
  headers: {
      'Authorization': 'Token ' + token
  }
})
}
