import React from 'react';
import firebase from 'database/firebase';
import { Collections } from 'utils/enums';
import { 
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  RELOAD_USER,
  RELOAD_USER_SUCCESS,
  RELOAD_USER_ERROR,
  LOGOUT_USER,
  UserDispatchTypes 
} from 'context/user/user.types';
import { UserI } from 'context/user/interfaces/user.interface';
import { RegisterDto } from 'context/user/dtos/register.dto';
import { LoginDto } from 'context/user/dtos/login.dto';
import { addRegisterCollection } from 'utils/actions';
import { UserStateI } from 'context/user/interfaces/userState.interface';



export const reloadUserActiion = (dispatch: React.Dispatch<UserDispatchTypes>) => {
 
  dispatch({
    type: RELOAD_USER,
    payload: true
  })
  firebase.auth.onAuthStateChanged(async(user) => {
 
    if(user){
      const {uid, displayName, email, phoneNumber, photoURL} = user as firebase.User;
      await getCollectionlUser(dispatch);
      const userCurrent: UserI = {
        uid, 
        displayName, 
        email, 
        phoneNumber, 
        photoURL
      }
      dispatch({
        type: RELOAD_USER_SUCCESS,
        payload: userCurrent
      })
    }else{
      dispatch({
        type: RELOAD_USER_ERROR,
        payload: true
      })
    }
  });
}

export const singUpAction = async(dispatch: React.Dispatch<UserDispatchTypes>, userDto: RegisterDto) => {
  dispatch({
    type: REGISTER,
    payload: true
  })
  try {
    const response = await firebase.auth.createUserWithEmailAndPassword(userDto.email, userDto.password);
    const {uid, displayName, email, phoneNumber, photoURL} = response.user as firebase.User;
    const userCurrent: UserI = {
      uid, 
      displayName, 
      email, 
      phoneNumber, 
      photoURL
    }
    dispatch({
      type: REGISTER_SUCCESS,
      payload: userCurrent
    })
    console.log("registrando");
  } catch (error) {
    console.log(error);
    dispatch({
      type: REGISTER_ERROR,
      payload: true
    })
  }

}

export const singInAction = async(dispatch: React.Dispatch<UserDispatchTypes>, userDto: LoginDto) => {
  dispatch({
    type: LOGIN,
    payload: true
  })
  try {
    const response = await firebase.auth.signInWithEmailAndPassword(userDto.email,userDto.password);
    await getCollectionlUser(dispatch);
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_ERROR,
      payload: true
    })
    throw new Error(error)
  }
  
}

export const validationPhoneAction = (setPhoneAuth: React.Dispatch<React.SetStateAction<boolean>>) => {
  firebase.db.collection(Collections.USERS).doc(getCurrentUserAction().uid).onSnapshot((snapshot) => {
    setPhoneAuth(snapshot.exists);
  })
}

export const getCurrentUserAction = () => {
  return firebase.auth.currentUser as firebase.User;
}

export const sendCodeAction = async(number: string, recapcha: any) => {
  let verificationId = "";
  try {
    // const response = await firebase.auth.currentUser?.reauthenticateWithPhoneNumber(number, recapcha.current);
    // verificationId = response?.verificationId as string;
    const provider = new firebase.getNumberProvider();
    const response = await provider.verifyPhoneNumber(number,recapcha.current);
    verificationId = response;
    console.log(verificationId);
  } catch (error) {
    console.log("raa");
    console.log(error);
  }
  return verificationId;
}

export const confirmCodeAction = async(verificationId: string, code: string) => {
  let result = false;
  const credetials = firebase.getNumberCredentials(verificationId,code);
  try {
    const user = await firebase.auth.currentUser?.linkWithCredential(credetials);
    result = true;
    // console.log(user);
  } catch (error) {
    console.log(error);
  }

  return result;
}

export const addUserAction = async(dispatch: React.Dispatch<UserDispatchTypes>,collection: string, doc: string, data: object) => {
  try {
    await addRegisterCollection(collection,doc,data);
    await getCollectionlUser(dispatch);
  } catch (error) {
    console.log(error);
  }
}

export const getCollectionlUser = async (dispatch: React.Dispatch<UserDispatchTypes>) => {
  try {
    const response = await firebase.db.collection(Collections.USERS).doc(getCurrentUserAction().uid).get();
    if(response.data() !== undefined){
      const dataUser = response.data();
      const userUpdate: UserI= {
        email: dataUser?.email,
        displayName: dataUser?.displayName,
        phoneNumber: dataUser?.phoneNumber,
        photoURL: dataUser?.photoURL,
        uid: dataUser?.uid,
        token: dataUser?.token,
        createdAt: new Date(dataUser?.createdAt.seconds * 1000)
      }
      dispatch({
        type: REGISTER_SUCCESS,
        payload: userUpdate
      })
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

export const logoutAction = async(dispatch: React.Dispatch<UserDispatchTypes>, userInitialState: UserStateI) => {
  try {
    await firebase.auth.signOut();
    dispatch({
      type: LOGOUT_USER,
      payload: userInitialState
    })
  } catch (error) {
    console.log(error);
  }
  
}