import * as React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Image } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-easy-toast';

import LoginForm from 'components/Account/LoginForm';
import Logo from 'assets/img/logo.png';
import { Colors } from 'utils/enums';

export interface LoginProps {
  
}
 
const Login: React.FC<LoginProps> = () => {
  const toast = React.useRef(null);
  return (  
    // <KeyboardAwareScrollView>
      <KeyboardAwareScrollView style={styles.viewLogin}>
        <StatusBar backgroundColor={Colors.GREEN}/>
        <Image
          source={Logo}
          style={styles.logo}
          containerStyle={styles.containerLogo}
        />
        <Text style={styles.txtWelcome}>¡Bienvenidos!</Text>
        <LoginForm toast={toast}/>
        <Toast ref={toast} position="center" opacity={0.8}/>
      </KeyboardAwareScrollView>
    // {/* </KeyboardAwareScrollView> */}

  );
}

const styles = StyleSheet.create({
  viewLogin: {
    backgroundColor: Colors.GREEN,
    flex: 1
  },
  containerLogo: {
    marginTop: 40,
    alignSelf: "center"
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