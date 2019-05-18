import { combineReducers } from 'redux'
import authReducer from './authReducer'
import userReducer from './usersReducer'

export default combineReducers({
  users: userReducer,
  auth: authReducer
})