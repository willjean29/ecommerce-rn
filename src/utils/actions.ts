import React from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import uuid from 'random-uuid-v4';
import firebase from 'database/firebase';
import { fileToBlob } from 'utils/utils';
import { FolderImages } from 'utils/enums';

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

export const uploadImagesServer = async(images: string[],folderName: string) => {
  const imagesUrl = [] as string[];
  await Promise.all(
    images.map(async(uri) => {
      const name = uuid();
      const blod = await fileToBlob(uri);
      const ref = firebase.storage.ref(folderName).child(name);
      await ref.put(blod);
      const photoName: string = await firebase.storage.ref(`${folderName}/${name}`).getDownloadURL();
      imagesUrl.push(photoName);
    })
  )
  return imagesUrl;
}