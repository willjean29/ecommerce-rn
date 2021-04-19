import React from 'react';

import firebase from 'database/firebase';

export const authSesionUser = (setSesionUser: React.Dispatch<React.SetStateAction<boolean>>) => {
  firebase.auth.onAuthStateChanged((user) => {
    if(user){
      console.log("SESION ACTIVA");
      setSesionUser(true);
    }else{
      console.log("NO HAY SESION ACTIVA")
    }
  });
}

export const logout = async() => {
  await firebase.auth.signOut()
}

export const validationPhone = (setPhoneAuth: React.Dispatch<React.SetStateAction<boolean>>) => {
  firebase.auth.onAuthStateChanged((user) => {
    if(user?.phoneNumber){
      console.log("SESION ACTIVA");
      setPhoneAuth(true);
    }else{
      console.log("NO HAY SESION ACTIVA")
    }
  });
}

export const sendConfirmation = async(number: string, recapcha: any) => {
  let verificationId = "";
  try {
    const response = await firebase.auth.currentUser?.reauthenticateWithPhoneNumber(number, recapcha.current);
    verificationId = response?.verificationId as string;
  } catch (error) {
    console.log("raa");
    console.log(error);
  }
  return verificationId;
}

export const confirmCode = async(verificationId: string, code: string) => {
  let result = false;
  const credetials = firebase.getNumberCredentials(verificationId,code);
  try {
    const user = await firebase.auth.currentUser?.linkWithCredential(credetials);
    result = true;
  } catch (error) {
    console.log(error);
  }

  return result;
}