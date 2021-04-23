import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-easy-toast';
import { Button } from 'react-native-elements';
import UserContext from 'context/user/user.context';
import AvatarUser from 'components/Profile/AvatarUser';
import AccountOptions from 'components/Profile/AccountOptions';
import Loading from 'components/Loading';
import { Colors, MessagesLoading } from 'utils/enums';
export interface ProfileProps {
  
}
 
const Profile: React.FC<ProfileProps> = () => {
  const toast = useRef(null);
  const {userState, reloadUser, logout} = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(userState.user);
  return (  
    <KeyboardAwareScrollView style={styles.viewProfile}>
      <StatusBar backgroundColor={Colors.GREEN}/>
      <AvatarUser
        toast={toast}
        setIsLoading={setIsLoading}
      />
      <AccountOptions/>
      <Button
        title="Cerrar Sesión"
        containerStyle={styles.containerBtn}
        titleStyle={styles.txtBtnLogout}
        buttonStyle={styles.btnLogout}
        onPress={() => logout()}
      />
      <Toast ref={toast} position="center" opacity={0.8}/>
      <Loading
        isVisible={isLoading}
        text={MessagesLoading.UPDATE_OPTION}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  viewProfile: {
    backgroundColor: Colors.WHITE,
    flex: 1
  },
  containerBtn: {
    marginHorizontal: 10,
    marginTop: 40
  },
  btnLogout: {
    backgroundColor: "transparent",
    alignSelf: "center"
  },
  txtBtnLogout: {
    color: Colors.GREEN,
    fontSize: 22,
    fontWeight: "bold"
  }
})
 
export default Profile;