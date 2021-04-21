import { UserI } from "context/user/interfaces/user.interface";
import { UserStateI } from "context/user/interfaces/userState.interface";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const RELOAD_USER = "RELOAD_USER";
export const RELOAD_USER_SUCCESS = "RELOAD_USER_SUCCESS";
export const RELOAD_USER_ERROR = "RELOAD_USER_ERROR";

export const LOGOUT_USER = "LOGOUT_USER";

export interface UserLogin {
  type: typeof LOGIN,
  payload: boolean
}
export interface UserLoginSucces {
  type: typeof LOGIN_SUCCESS,
  payload: UserI
}
export interface UserLoginError {
  type: typeof LOGIN_ERROR,
  payload: boolean
}
export interface UserRegister {
  type: typeof REGISTER,
  payload: boolean
}
export interface UserRegisterSuccess {
  type: typeof REGISTER_SUCCESS,
  payload: UserI
}
export interface UserRegisterError {
  type: typeof REGISTER_ERROR,
  payload: boolean
}
export interface ReloadUser {
  type: typeof RELOAD_USER,
  payload: boolean
}
export interface ReloadUserSuccess {
  type: typeof RELOAD_USER_SUCCESS,
  payload: UserI
}
export interface ReloadUserError {
  type: typeof RELOAD_USER_ERROR,
  payload: boolean
}
export interface LogoutUser {
  type: typeof LOGOUT_USER,
  payload: UserStateI
}

export type UserDispatchTypes = 
  | UserLogin
  | UserLoginSucces
  | UserLoginError
  | UserRegister 
  | UserRegisterSuccess
  | UserRegisterError
  | ReloadUser
  | ReloadUserSuccess
  | ReloadUserError
  | LogoutUser;
