import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import AppReducer from './reducers'

// const initialState = {}
const middleware = [thunk]
const store = createStore(
  AppReducer,
  // initialState,
  compose(
    applyMiddleware(...middleware)
  )
)
export default store
