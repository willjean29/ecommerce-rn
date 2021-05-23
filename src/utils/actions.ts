import React from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import uuid from 'random-uuid-v4';
import firebase from 'database/firebase';
import { fileToBlob } from 'utils/utils';
import { Collections, FolderImages } from 'utils/enums';
import { UserI } from 'context/user/interfaces/user.interface';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

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
      alert('No se pudo generar el token para las notificaciones');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert('Debe usar un dispositivo fisico para el uso de notificaciones');
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

export const initialNotifications = (notificationListener: React.MutableRefObject<any>, responseListener: React.MutableRefObject<any>) => {
 
  // This listener is fired whenever a notification is received while the app is foregrounded
  notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    console.log(notification);
  });

  // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
  responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    console.log(response);
  });

  return () => {
    Notifications.removeNotificationSubscription(notificationListener.current);
    Notifications.removeNotificationSubscription(responseListener.current);
  };
}

export const sendPushNotification = async(message: any) => {
  let result: boolean = false;
  try {
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    const data = await response.json();
    result = true;
  } catch (error) {
    result = false;
  }
  return result;
}

export const setMessageNotification = (token: string, title: string, body: string, data: object) => {
  const message = {
    to: token,
    sound: 'default',
    title,
    body,
    data,
  }
  return message;
}

export const addRegisterCollection = async(collection: string, doc: string, data: object) => {
  const result = {
    error: "",
    statusResponse: false,
    data: null
  };
  try {
    await firebase.db.collection(collection).doc(doc).set(data,{merge: true});
    result.statusResponse = true;
  } catch (error) {
    result.statusResponse = false;  
  }
}

export const addDataCollection = async(collection: string, data: object) => {
  try {
    await firebase.db.collection(collection).add(data);
    return true;
  } catch (error) {
    return false;  
  }
}

export const uploadImagesServer = async(images: string[],folderName: string) => {
  const imagesUrl = [] as string[];
  await Promise.all(
    images.map(async(uri) => {
      if(uri.includes("firebasestorage")){
        imagesUrl.push(uri);
      }else{
        const name = uuid();
        const blod = await fileToBlob(uri);
        const ref = firebase.storage.ref(folderName).child(name);
        await ref.put(blod);
        const photoName: string = await firebase.storage.ref(`${folderName}/${name}`).getDownloadURL();
        imagesUrl.push(photoName);
      }
    })
  )
  return imagesUrl;
}

export const deleteDataCollection = async(collection: string, doc: string) => {
  try {
    await firebase.db.collection(collection).doc(doc).delete();
    return true;
  } catch (error) {
    return false;
  }
}

export const existAccount = async(collection: string, email: string) => {
  let result = false;
  try {
    const response = await firebase.db.collection(collection).where(
      "email","==",email
    ).get();
    response.forEach((user)=> {
      const data = user.data() as UserI;
      if(data.email === email){
        result = true;
      }
    })
  } catch (error) {
    result = false;
  }

  return result;
}
