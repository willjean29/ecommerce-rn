import React, { useRef } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Image, Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-easy-toast';
import ConfirmNumber from 'components/Account/ConfirmNumber';
import FirebaseRecapcha from 'components/FirebaseRecapcha';
import { Colors } from 'utils/enums';
import Logo from 'assets/img/logo.png';
export interface ConfirmPhoneProps {
  
}
 
const ConfirmPhone: React.FC<ConfirmPhoneProps> = () => {
  const recapchaVerification = useRef();
  const inputNumber = useRef();
  return (  
    <KeyboardAwareScrollView style={styles.viewConfirmPhone}>
      <Image
        source={Logo}
        style={styles.logo}
        containerStyle={styles.containerLogo}
        PlaceholderContent={
          <ActivityIndicator size={"large"} color={Colors.WHITE}/>
        }
      />
      <ConfirmNumber
        recapcha={recapchaVerification}
      />
      <FirebaseRecapcha
        recapcha={recapchaVerification}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  viewConfirmPhone: {
    backgroundColor: Colors.GREEN,
    flex: 1,
  },
  containerLogo: {
    marginTop: 40,
    alignSelf: "center",
    backgroundColor: "transparent",
    marginBottom: 40
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
 
export default ConfirmPhone;