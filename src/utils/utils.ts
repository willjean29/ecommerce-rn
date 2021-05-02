import * as ImagePicker from 'expo-image-picker'; 
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