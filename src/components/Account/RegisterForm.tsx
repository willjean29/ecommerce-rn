import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Icon, Button, Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'utils/enums';
export interface RegisterFormProps {
  
}
 
const RegisterForm: React.FC<RegisterFormProps> = () => {
  const navigation = useNavigation();
  return (  
    <View style={styles.viewRegisterForm}>
      <Divider style={styles.dividerTop}/>
      <Input
        placeholder="Correo"
        leftIcon={
          <Icon
            type="material-community"
            name="account-circle-outline"
            color={Colors.GREEN}
          />
        }
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            color={Colors.GREEN}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        leftIcon={
          <Icon
            type="material-community"
            name="security"
            color={Colors.GREEN}
          />
        }
        rightIcon={
          <Icon
            type="material-community"
            name={"eye-outline"}
            color={Colors.GREEN}
          />
        }
      />
      <Input
        placeholder="Repetir Contraseña"
        leftIcon={
          <Icon
            type="material-community"
            name="security"
            color={Colors.GREEN}
          />
        }
        rightIcon={
          <Icon
            type="material-community"
            name={"eye-outline"}
            color={Colors.GREEN}
          />
        }
      />
      <Button
        title="Crear Cuenta"
        containerStyle={styles.containerBtn}
        buttonStyle={styles.btnRegister}
        titleStyle={styles.titleBtnRegister}
      />
      <Button
        title="Iniciar Sesión"
        containerStyle={styles.containerBtn}
        buttonStyle={styles.btnLogin}
        titleStyle={styles.titleBtnLogin}
        onPress={() => navigation.navigate("login")}
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
    marginHorizontal: "30%",
    marginBottom: 20
  },
  viewRegisterForm: {
    marginTop: 30,
    backgroundColor: Colors.WHITE,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginHorizontal: 10
  },
  containerBtn: {
    marginTop: 10,
    width: "95%",
    alignSelf: "center"
  },
  btnLogin: {
    backgroundColor: Colors.WHITE,
    alignSelf: "center"
  },
  btnRegister: {
    backgroundColor: Colors.GREENLIGHT
  },
  titleBtnLogin: {
    color: Colors.GREEN,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  titleBtnRegister: {
    fontWeight: "bold",
    textTransform: "uppercase",
  }
})

 
export default RegisterForm;
