import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CodeInput from 'react-native-code-input';
import Modal from 'components/Modal';
import { Colors } from 'utils/enums';
export interface ModalConfirmCodeProps {
  isVisible: boolean;
  confirmCodeSMS: (value: string) => Promise<void>;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}
 
const ModalConfirmCode: React.FC<ModalConfirmCodeProps> = ({isVisible,setIsVisible,confirmCodeSMS}) => {
  return (  
    <Modal 
      isVisible={isVisible}
      setIsVisible={setIsVisible}
    >
      <View style={styles.viewConfirmCode}>
        <Text style={styles.txtTitle}>
          Confirmar Código
        </Text>
        <Text style={styles.txtMessage}>
          Ingrese el código que se le ha enviado a su teléfono.
        </Text>
        <CodeInput
          secureTextEntry
          activeColor= {Colors.GREEN}
          inactiveColor={Colors.GREEN}
          autoFocus={true}
          inputPosition='center'
          size={40}
          codeLength={6}
          onFulfill={(code: any) => confirmCodeSMS(code)}
          containerStyle={styles.containerCodeInput}
          codeInputStyle={{ borderWidth: 1.5}}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  viewConfirmCode: {
    marginHorizontal: 10,
    alignItems: "center",
    height: 160
  },
  txtTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  txtMessage: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16
  },
  containerCodeInput: {
 
  }
})
 
export default ModalConfirmCode;