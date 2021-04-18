import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-easy-toast';
import RegisterForm from 'components/Account/RegisterForm';
import Loading from 'components/Loading';
import Logo from 'assets/img/logo.png';
import { Colors } from 'utils/enums';

export interface RegisterProps {
  
}
 
const Register: React.FC<RegisterProps> = () => {
  const toast = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [txtLoading, setTxtLoading] = useState<string>("");
  return (  
    <KeyboardAwareScrollView style={styles.viewRegister}>
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
      <RegisterForm 
        toast={toast}
        setIsVisible={setIsVisible}
      />
      <Toast ref={toast} position="center" opacity={0.8}/>
      <Loading
        isVisible={isVisible}
        text="Registrando Usuario"
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  viewRegister: {
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
 
export default Register;