import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Icon, Button, Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import UserContext from 'context/user/user.context';
import { useForm } from 'hooks/useForm';
import { Colors, MessagesToast } from 'utils/enums';
import { validationEmail, validationPassword, comparePassword } from 'utils/validations';

import firebase from 'database/firebase';
export interface RegisterFormProps {
  toast: React.MutableRefObject<any>
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}
 
const RegisterForm: React.FC<RegisterFormProps> = ({toast,setIsVisible}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {dataForm, onChangeValue} = useForm({
    email: "",
    password: "",
    repeatedPassword: "",
  })
  const {singUp} = useContext(UserContext);

  const navigation = useNavigation();

  const handleRegister = async() => {
    if(!dataForm.email || !dataForm.password || !dataForm.repeatedPassword){
      toast.current.show(MessagesToast.EMPTY);
    }else if(!validationEmail(dataForm.email)){
      toast.current.show(MessagesToast.EMAIL_ERROR);
    }else if(!validationPassword(dataForm.password)){
      toast.current.show(MessagesToast.PASSWORD_LENGTH);
    }else if(!comparePassword(dataForm.password, dataForm.repeatedPassword)){
      toast.current.show(MessagesToast.COMPARE_PASSWORD);
    }else{
      setIsVisible(true);
      try {
        const registerDto = {email:dataForm.email,password:dataForm.password}
        await singUp(registerDto);
        // setIsVisible(false);
        // toast.current.show(MessagesToast.REGISTER_USER_SUCCESS);
      } catch (error) {
        setIsVisible(false);
        if(error.toString()=== MessagesToast.REGISTER_FIREBASE_ERROR){
          toast.current.show(MessagesToast.REGISTER_USER_ERROR);
        }else{
          toast.current.show(MessagesToast.REGISTER_ERROR);
        }
      }
    }
  }
  return (  
    <View style={styles.viewRegisterForm}>
      <Divider style={styles.dividerTop}/>
      <Input
        placeholder="Correo"
        onChangeText={(text: string) => onChangeValue(text, "email")}
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
        secureTextEntry={showPassword ? false : true}
        onChangeText={(text: string) => onChangeValue(text, "password")}
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
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            color={Colors.GREEN}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Input
        placeholder="Repetir Contraseña"
        secureTextEntry={showPassword ? false : true}
        onChangeText={(text: string) => onChangeValue(text, "repeatedPassword")}
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
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            color={Colors.GREEN}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Button
        title="Crear Cuenta"
        containerStyle={styles.containerBtn}
        buttonStyle={styles.btnRegister}
        titleStyle={styles.titleBtnRegister}
        onPress={handleRegister}
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
