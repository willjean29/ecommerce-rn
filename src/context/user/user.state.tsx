import React, { useReducer } from 'react';
import UserContext from 'context/user/user.context';
import { UserStateI } from 'context/user/interfaces/userState.interface';
import UserReducer from 'context/user/user.reducer';
import { 
  addUserAction,
  confirmCodeAction, 
  getCurrentUserAction, 
  logoutAction, 
  reloadUserActiion, 
  sendCodeAction, 
  singInAction, 
  singUpAction, 
  validationPhoneAction 
} from 'context/user/user.actions';
import { RegisterDto } from 'context/user/dtos/register.dto';
import { addRegisterCollection, registerForPushNotificationsAsync } from 'utils/actions';
import { UserDispatchTypes } from './user.types';
import { LoginDto } from 'context/user/dtos/login.dto';
export interface UserStateProps {
  children: React.ReactNode
}

const UserState: React.FC<UserStateProps> = ({children}) => {
  const userInitialState : UserStateI = {
    user: null,
    isLoading: false,
    error: null 
  }

  const [userState, dispatch] = useReducer(UserReducer, userInitialState);

  const reloadUser = () => {
    reloadUserActiion(dispatch);
  }
  const singIn = (userDto: LoginDto) => singInAction(dispatch,userDto);
  const singUp = (userDto: RegisterDto) => singUpAction(dispatch, userDto);
  const validatioPhone = (setPhoneAuth: React.Dispatch<React.SetStateAction<boolean>>) => validationPhoneAction(setPhoneAuth);
  const sendCode = (number: string, recaptcha: any) => sendCodeAction(number,recaptcha);
  const confirmCode = (verificationId: string, code: string) => confirmCodeAction(verificationId,code);
  const registerPushNotification = () => registerForPushNotificationsAsync();
  const addCollectionData = (collection: string, doc: string, data: object) => addUserAction(dispatch,collection,doc,data);
  const getCurrentUser = () => getCurrentUserAction();
  const logout = () => logoutAction(dispatch,userInitialState);

  return (  
    <UserContext.Provider
      value={{
        userState,
        singIn,
        singUp,
        sendCode,
        validatioPhone,
        confirmCode,
        reloadUser,
        registerPushNotification,
        addCollectionData,
        getCurrentUser,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );  
}
 
export default UserState;
