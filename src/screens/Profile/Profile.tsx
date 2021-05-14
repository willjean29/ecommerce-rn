import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Alert} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-easy-toast';
import { Button } from 'react-native-elements';
import UserContext from 'context/user/user.context';
import AvatarUser from 'components/Profile/AvatarUser';
import AccountOptions from 'components/Profile/AccountOptions';
import Loading from 'components/Loading';
import { Colors, MessagesLoading, MessagesToast } from 'utils/enums';
import ModalConfirmCode from 'components/Profile/ModalConfirmCode';
import FirebaseRecapcha from 'components/FirebaseRecapcha';

export interface ProfileProps {
 
}
 
const Profile: React.FC<ProfileProps> = () => {
  const recapchaVerification = useRef();
  const toast = useRef(null as any);
  const {logout, reauthenticate, updateEmail, updatePhoneNumber, reauthenticateNumber} = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [validationId, setValidationId] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const confirmCodeSMS = async(code:string) => {
    setIsLoading(true);
    const verificactionId = email ? await reauthenticate(validationId,code) : await reauthenticateNumber(validationId,code);
    console.log(verificactionId);
    if(verificactionId){
      if(email === ""){
        console.log("actulizar número");
        await updatePhoneNumber(phoneNumber);
        setIsLoading(false);
        setIsVisible(false);
        toast.current.show(MessagesToast.VALUE_CHANGE);
        setPhoneNumber("");
      }else{
        console.log("actulizar email");
        await updateEmail(email);
        setIsLoading(false);
        setIsVisible(false);
        toast.current.show(MessagesToast.VALUE_CHANGE);
        setEmail("");
      }
    }else{
      console.log("hubo un error");
      setIsLoading(false);
      setIsVisible(false);
      Alert.alert(
        "Error Código",
        MessagesToast.CODE_CONFIRM_ERROR,
        [
          {
            text: "OK",
            style: "cancel"
          }
        ],
        {cancelable: true}
      );
    }
  }
  return (  
    <KeyboardAwareScrollView style={styles.viewProfile}>
      <StatusBar backgroundColor={Colors.GREEN}/>
      <AvatarUser
        toast={toast}
        setIsLoading={setIsLoading}
      />
      <AccountOptions
        toast={toast}
        setIsLoading={setIsLoading}
        setIsVisible={setIsVisible}
        recapcha={recapchaVerification}
        setValidationId={setValidationId}
        setEmail={setEmail}
        setPhoneNumber={setPhoneNumber}
      />
      <Button
        title="Cerrar Sesión"
        containerStyle={styles.containerBtn}
        titleStyle={styles.txtBtnLogout}
        buttonStyle={styles.btnLogout}
        onPress={() => logout()}
      />
      <Toast ref={toast} position="center" opacity={0.8}/>
      <FirebaseRecapcha
        recapcha={recapchaVerification}
      />
      <Loading
        isVisible={isLoading}
        text={MessagesLoading.UPDATE_OPTION}
      />
      <ModalConfirmCode
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        confirmCodeSMS={confirmCodeSMS}
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