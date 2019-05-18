import { combineReducers } from 'redux'
import authReducer from './authReducer'
import userReducer from './usersReducer'
import adminsReducer from './adminsReducer'

export default combineReducers({
  users: userReducer,
  auth: authReducer,
  admins: adminsReducer,
})