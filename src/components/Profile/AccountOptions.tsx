import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Toast from 'react-native-easy-toast';
import { Colors } from 'utils/enums';
import InputOption from 'components/Profile/InputOption';
import UserContext from 'context/user/user.context';

export interface AccountOptionsProps {
  toast: React.MutableRefObject<any>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  recapcha: React.MutableRefObject<any>;
  setValidationId: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}
 
const AccountOptions: React.FC<AccountOptionsProps> = ({toast, setIsLoading,setIsVisible,recapcha,setValidationId,setEmail,setPhoneNumber}) => {
  const options = generateOptions();
  return (  
    <View style={styles.viewAccountOptions}>
      {
        options.map((option,index) => (
          <InputOption
            key={index}
            option={option}
            toast={toast}
            setIsLoading={setIsLoading}
            setIsVisible={setIsVisible}
            recapcha={recapcha}
            setValidationId={setValidationId}
            setEmail={setEmail}
            setPhoneNumber={setPhoneNumber}
          />
        ))
      }
    </View>
  );
}

const generateOptions = () => {
  const {userState,updateName,updateEmail} = useContext(UserContext);
  return [
    {
      title: "Nombre",
      iconType: "material-community",
      iconEdit: "pencil",
      iconSave: "content-save",
      value: userState.user?.displayName,
      onPress: (name: string) => updateName(name)
    },
    {
      title: "Correo",
      iconType: "material-community",
      iconEdit: "pencil",
      iconSave: "content-save",
      value: userState.user?.email,
      onPress: (email: string) => updateEmail(email)
    },
    {
      title: "Teléfono",
      iconType: "material-community",
      iconEdit: "pencil",
      iconSave: "content-save",
      value: userState.user?.phoneNumber,
      onPress: () => console.log("teléfono")
    }
  ]
}

const styles = StyleSheet.create({
  viewAccountOptions: {
    // borderWidth: 3,
    marginTop: 40,
    marginHorizontal: 10
  }
})
 
export default AccountOptions;
