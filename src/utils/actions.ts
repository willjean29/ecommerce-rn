import React from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import firebase from 'database/firebase';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
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
  firebase.db.collection("Users").doc(getCurrentUser().uid).onSnapshot((snapshot) => {
    setPhoneAuth(snapshot.exists);
  })
}

export const sendConfirmation = async(number: string, recapcha: any) => {
  let verificationId = "";
  try {
    const response = await firebase.auth.currentUser?.reauthenticateWithPhoneNumber(number, recapcha.current);
    verificationId = response?.verificationId as string;
    // const provider = new firebase.getNumberProvider();
    // const response = await provider.verifyPhoneNumber(number,recapcha.current);
    console.log(verificationId);
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
    console.log(user);
  } catch (error) {
    console.log(error);
  }

  return result;
}
export const registerForPushNotificationsAsync = async () => {
  let token : string = "";
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  return token;
};

export const getCurrentUser = () => {
  return firebase.auth.currentUser as firebase.User;
}

export const addRegisterCollection = async(collection: string, doc: string, data: object) => {
  const result = {
    error: "",
    statusResponse: false,
    data: null
  };
  try {
    await firebase.db.collection(collection).doc(doc).set(data);
    result.statusResponse = true;
  } catch (error) {
    result.statusResponse = false;  
  }
}