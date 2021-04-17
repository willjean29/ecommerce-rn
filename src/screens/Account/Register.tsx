import React, { useRef } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { Image } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-easy-toast';
import RegisterForm from 'components/Account/RegisterForm';
import Logo from 'assets/img/logo.png';
import { Colors } from 'utils/enums';

export interface RegisterProps {
  
}
 
const Register: React.FC<RegisterProps> = () => {
  const toast = useRef(null);
  return (  
    <View style={styles.viewRegister}>
      <StatusBar backgroundColor={Colors.GREEN}/>
      <Image
          source={Logo}
          style={styles.logo}
          containerStyle={styles.containerLogo}
        />
      <Text style={styles.txtWelcome}>¡Bienvenidos!</Text>
      <RegisterForm/>
      <Toast ref={toast} position="center" opacity={0.8}/>
    </View>
  );
}

const styles = StyleSheet.create({
  viewRegister: {
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
 
export default Register;