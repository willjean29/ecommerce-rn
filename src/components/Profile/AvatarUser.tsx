import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Avatar } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker'; 
import UserContext from 'context/user/user.context';
import { Colors, FolderImages, MessagesToast } from 'utils/enums';
import UserDefault from 'assets/img/avatar.jpg';

export interface AvatarUserProps {
  toast: React.MutableRefObject<any>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}
 
const AvatarUser: React.FC<AvatarUserProps> = ({toast,setIsLoading}) => {
  const {uploadAvatar,updatePhoto,userState} = useContext(UserContext);
  const handleOpenGalery = async() => {
    const requestPermissions = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(!requestPermissions.granted){
      toast.current.show(MessagesToast.OPEN_GALERY_ERROR);
      return;
    }
    const mediaLibrary = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true
    });

    if(mediaLibrary.cancelled){
      toast.current.show(MessagesToast.OPEN_GALERY_EMPTY);
      return;
    }
    console.log(mediaLibrary.uri);
    setIsLoading(true);
    try {
      await uploadAvatar(mediaLibrary.uri);
      await updatePhoto();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return (  
    <View style={styles.viewAvatarUser}>
      <Avatar
        source={
          userState.user?.photoURL
            ? {uri: userState.user?.photoURL}
            : UserDefault
        }
        size={100}
        rounded
        containerStyle={styles.containerAvatar}
        renderPlaceholderContent={<ActivityIndicator size="large" color={Colors.GREEN}/>}
      >
        <Avatar.Accessory
          containerStyle={styles.containerIcon}
          onPress={handleOpenGalery}
          size={30}
        />
      </Avatar>
  
    </View>
  );
}

const styles = StyleSheet.create({
  viewAvatarUser: {
    backgroundColor: Colors.GREEN,
    height: 200,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200
  },
  containerAvatar: {
    // borderWidth: 3,
    backgroundColor: Colors.GRAYINACTIVE,
    position: "absolute",
    bottom: -20,
    alignSelf: "center"
  },
  containerIcon: {
    // borderWidth: 4
  }
})
 
export default AvatarUser;