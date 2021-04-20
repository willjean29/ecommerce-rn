import React, {useState} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import Toast from 'react-native-easy-toast';
import CodeInput from 'react-native-code-input';
import { Route, useNavigation, NavigationState} from '@react-navigation/native';
import Loading from 'components/Loading';
import Logo from 'assets/img/logo.png';
import { Colors } from 'utils/enums';
import { confirmCode, getCurrentUser, registerForPushNotificationsAsync, addRegisterCollection } from 'utils/actions';

interface SendConfirmParams {
  validationId: string
}
export interface SendConfirmProps {
  navigation: typeof useNavigation,
  route: Route<string,SendConfirmParams>
}

const SendConfirm: React.FC<SendConfirmProps> = ({route,navigation}) => {
  const {validationId} = route.params;
  const [loading, setLoading] = useState(false);

  const handleConfirmCode = async (code: string) => {
    setLoading(true);
    const result = await confirmCode(validationId,code);
    if(result){
      const token = await registerForPushNotificationsAsync();
      const {uid,displayName,phoneNumber,photoURL,email} = getCurrentUser();
  
      const registerUser = await addRegisterCollection("Users",uid,{
        token,
        displayName,
        phoneNumber,
        photoURL,
        email,
        createAt: new Date()
      })
      setLoading(false);

    }else{
      console.log("hubo un error");
      setLoading(false);

    }

  }
  return (  
    <View style={styles.viewSendConfirm}>
      <Image
        source={Logo}
        style={styles.logo}
        containerStyle={styles.containerLogo}
        PlaceholderContent={
          <ActivityIndicator size={"large"} color={Colors.WHITE}/>
        }
      />
      <Text style={styles.txtInfo}>
        Ingrese el código de verificación
      </Text>
      <CodeInput
        secureTextEntry
        activeColor= {Colors.WHITE}
        inactiveColor={Colors.WHITE}
        autoFocus={true}
        inputPosition='center'
        size={50}
        codeLength={6}
        onFulfill={(code: any) => handleConfirmCode(code)}
        containerStyle={{ marginTop: 30 }}
        codeInputStyle={{ borderWidth: 1.5}}
      />
      <Loading isVisible={loading} text="Cargando ..."/>
    </View>
  );
}

const styles = StyleSheet.create({
  viewSendConfirm: {
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
  txtInfo: {
    marginTop: 30,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.WHITE
  }
})
 
export default SendConfirm;