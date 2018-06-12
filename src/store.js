import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import AppReducer from './reducers'

const middleware = [thunk]
const store = createStore(
  AppReducer,
  compose(
    applyMiddleware(...middleware)
  )
)
export default store
