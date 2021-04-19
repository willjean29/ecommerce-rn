import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-easy-toast';

import LoginForm from 'components/Account/LoginForm';
import Loading from 'components/Loading';
import Logo from 'assets/img/logo.png';
import { Colors } from 'utils/enums';
import { authSesionUser, logout } from 'utils/actions';

export interface LoginProps {
  
}
 
const Login: React.FC<LoginProps> = () => {
  const toast = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // logout();
  // authSesionUser();
  return (  
    <KeyboardAwareScrollView style={styles.viewLogin}>
      <StatusBar backgroundColor={Colors.GREEN}/>
      <Image
        source={Logo}
        style={styles.logo}
        containerStyle={styles.containerLogo}
        PlaceholderContent={
          <ActivityIndicator size={"large"} color={Colors.WHITE}/>
        }
      />
      <Text style={styles.txtWelcome}>¡Bienvenidos!</Text>
      <LoginForm 
        toast={toast}
        setIsVisible={setIsVisible}
      />
      <Toast ref={toast} position="center" opacity={0.8}/>
      <Loading
        isVisible={isVisible}
        text="Cargando ..."
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  viewLogin: {
    backgroundColor: Colors.GREEN,
    flex: 1
  },
  containerLogo: {
    marginTop: 40,
    alignSelf: "center",
    backgroundColor: "transparent"
  },
  logo: {
    height: 100,
    width: 100,
  },
  txtWelcome: {
    color: Colors.WHITE,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10
  }
})
 
export default Login;