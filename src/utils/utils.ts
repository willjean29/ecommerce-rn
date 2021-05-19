import * as ImagePicker from 'expo-image-picker'; 
import { Alert, Linking } from 'react-native';
import { MessagesToast } from 'utils/enums';

export const handleOpenGalery = async(toast:any) => {
  const requestPermissions = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if(!requestPermissions.granted){
    toast.current.show(MessagesToast.OPEN_GALERY_ERROR);
    return false;
  }
  const mediaLibrary = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true
  });

  if(mediaLibrary.cancelled){
    toast.current.show(MessagesToast.OPEN_GALERY_EMPTY);
    return false;
  }
  return mediaLibrary.uri;

}

export const fileToBlob = async(uri: string) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  return blob;
}

export const sendWhatsapp = async(number: string, text: string) => {
  const link = `whatsapp://send?phone=${number.substring(1,number.length)}&text=${text}`;
  console.log(link);
  try {
    const supported = await Linking.canOpenURL(link);
    if(!supported){
      Alert.alert(
        "Mensaje Error",
        "Instale Whatsapp para poder enviar un mensaje",
        [
          {
            style: "cancel",
            text: "Entendido"
          }
        ]
      )
    }else{
      return Linking.openURL(link);
    }
  } catch (error) {
    Alert.alert(
      "Mensaje Error",
      "Se ha producido un error al enviar el mensaje",
      [
        {
          style: "cancel",
          text: "Ok"
        }
      ]
    )
  }
}