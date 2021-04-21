import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  RELOAD_USER,
  RELOAD_USER_ERROR,
  RELOAD_USER_SUCCESS,
  LOGOUT_USER,
  UserDispatchTypes
} from 'context/user/user.types';
import { UserStateI } from 'context/user/interfaces/userState.interface'



const UserReducer = (state : UserStateI , action: UserDispatchTypes) => {
  switch (action.type) {
    case RELOAD_USER: 
    case REGISTER:
      return {
        ...state,
        isLoading: action.payload
      }
    case RELOAD_USER_SUCCESS: 
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      }
    case RELOAD_USER_ERROR: 
    case REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    case LOGOUT_USER:
      return {
        user: null,
        isLoading: false,
        error: null 
      }
  default:
    return state
  }
}

export default UserReducer;
