import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Icon, Divider, Button, Input } from 'react-native-elements';
import CountryPicker, { CountryCode, TranslationLanguageCode } from 'react-native-country-picker-modal';
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'utils/enums';
import { sendConfirmation } from 'utils/actions';


export interface ConfirmNumberProps {
  recapcha: React.MutableRefObject<any>
}
 
const ConfirmNumber: React.FC<ConfirmNumberProps> = ({recapcha}) => {
  const [country, setCountry] = useState<CountryCode>("PE");
  const [callingCode, setCallingCode] = useState<string>("51");
  const [phone, setPhone] = useState<string>("");
  const lenguage : TranslationLanguageCode = "spa";
  const navigation = useNavigation();
  const handleSendConfirm = async() => {
    console.log("dfdsfd");
    if(!phone){
      console.log("Ingrese un número de teléfono por favor");
    }else{
      const number = `+${callingCode}${phone}`;
      const validationId = await sendConfirmation(number,recapcha);
      if(validationId){
        navigation.navigate("send-confirm")
      }else{
        console.log("raaaaaa");
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