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

export const SEND_CODE = "SEND_CODE";
export const SEND_CODE_SUCCESS = "SEND_CODE_SUCCESS";
export const SEND_CODE_ERROR = "SEND_CODE_ERROR";

export const CONFIRM_CODE = "CONFIRM_CODE";
export const CONFIRM_CODE_SUCCESS = "CONFIRM_CODE_SUCCESS";
export const CONFIRM_CODE_ERROR = "CONFIRM_CODE_ERROR";

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
export interface SendCode {
  type: typeof SEND_CODE,
  payload: boolean
}
export interface SendCodeSuccess {
  type: typeof SEND_CODE_SUCCESS,
  payload: string
}
export interface SendCodeError {
  type: typeof SEND_CODE_ERROR,
  payload: boolean
}
export interface ConfirmCode {
  type: typeof CONFIRM_CODE,
  payload: boolean
}
export interface ConfirmCodeSuccess {
  type: typeof CONFIRM_CODE_SUCCESS,
  payload: string
}
export interface ConfirmCodeError {
  type: typeof CONFIRM_CODE_ERROR,
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
  | SendCode
  | SendCodeSuccess
  | SendCodeError
  | ConfirmCode
  | ConfirmCodeSuccess
  | ConfirmCodeError
  | ReloadUser
  | ReloadUserSuccess
  | ReloadUserError
  | LogoutUser;
