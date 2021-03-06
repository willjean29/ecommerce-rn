import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Icon, Divider, Button, Input } from 'react-native-elements';
import CountryPicker, { CountryCode, TranslationLanguageCode } from 'react-native-country-picker-modal';
import { useNavigation } from '@react-navigation/native';
import UserContext from 'context/user/user.context';
import { Colors, MessagesToast } from 'utils/enums';


export interface ConfirmNumberProps {
  recapcha: React.MutableRefObject<any>,
  toast: React.MutableRefObject<any>,
  inputNumber: React.MutableRefObject<any>
}
 
const ConfirmNumber: React.FC<ConfirmNumberProps> = ({recapcha,toast,inputNumber}) => {
  const [country, setCountry] = useState<CountryCode>("PE");
  const [callingCode, setCallingCode] = useState<string>("51");
  const [phone, setPhone] = useState<string>("");
  const {sendCode} = useContext(UserContext);
  const lenguage : TranslationLanguageCode = "spa";
  const navigation = useNavigation();

  const handleSendConfirm = async() => {
    if(!phone){
      toast.current.show("Ingrese un número de teléfono por favor");
    }else{
      const number = `+${callingCode}${phone}`;
      const validationId = await sendCode(number,recapcha);
      if(validationId){
        navigation.navigate("send-confirm",{validationId})
      }else{
        toast.current.show(MessagesToast.NUMBER_ERROR);
        inputNumber.current.clear();
        inputNumber.current.focus();
      }
    }
  }

  return (  
    <View style={styles.viewConfirmNumber}>
      <Divider style={styles.dividerTop}/>
      <Icon
        type="material-community"
        name="whatsapp"
        color={Colors.GREENLIGHT}
        size={80}
        containerStyle={styles.containerIcon}
      />
      <Text style={styles.txtTitle}>
        Por favor ingrese su número de whatsapp
      </Text>
      <View style={styles.viewNumberPhone}>
        <CountryPicker
          withFlag
          withCallingCode
          withFilter
          withCallingCodeButton
          translation={lenguage}
          countryCode={country}
          onSelect={(Country) => {
            setCountry(Country.cca2);
            setCallingCode(Country.callingCode[0])
          }}
        />
        <Text style={styles.txtDivider}>|</Text>
        <TextInput
          placeholder="Numero de whatsapp"
          style={styles.inputNumber}
          placeholderTextColor={Colors.WHITE}
          onChangeText={(text: string) => setPhone(text)}
          keyboardType="numeric"
          ref={inputNumber}
        />
      </View>
      <Button
        title="Confirmar Número"
        containerStyle={styles.containerBtn}
        buttonStyle={styles.btnConfirm}
        onPress={handleSendConfirm}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dividerTop: {
    backgroundColor: Colors.GREENLIGHT,
    height: 4,
    width: "40%",
    borderRadius: 100,
    marginHorizontal: "30%"
  },
  viewConfirmNumber: {
    // flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Colors.WHITE
  },
  containerIcon: {
    marginVertical: 30,
  },
  txtTitle: {
    textAlign: "center",
    color: Colors.GREENLIGHT,
    fontWeight: "bold",
    fontSize: 18
  },
  viewNumberPhone: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.GREEN_OPACITY,
    // opacity: 0.6,
    height: 50,
    borderRadius: 10,
    marginVertical: 40,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  txtDivider: {
    color: Colors.WHITE,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  inputNumber: {
    color: Colors.WHITE,
    fontWeight: "bold",
    flex: 1,
    fontSize: 16
  },
  containerBtn: {

  },
  btnConfirm: {
    borderRadius: 10,
    backgroundColor: Colors.GREENLIGHT,
    height: 50
  }
})
 
export default ConfirmNumber;