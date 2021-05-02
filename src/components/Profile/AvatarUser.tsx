import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Avatar } from 'react-native-elements'; 
import UserContext from 'context/user/user.context';
import { Colors, MessagesToast } from 'utils/enums';
import UserDefault from 'assets/img/avatar.jpg';
import { handleOpenGalery } from 'utils/utils';

export interface AvatarUserProps {
  toast: React.MutableRefObject<any>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}
 
const AvatarUser: React.FC<AvatarUserProps> = ({toast,setIsLoading}) => {
  const {uploadAvatar,updatePhoto,userState} = useContext(UserContext);
  const handleSelectImage = async() => {
    const uri = await handleOpenGalery(toast);
    if(uri){
      setIsLoading(true);
      try {
        await uploadAvatar(uri);
        await updatePhoto();
        setIsLoading(false);
        toast.current.show(MessagesToast.VALUE_CHANGE)
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
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
          onPress={handleSelectImage}
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