import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Icon, Button, Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as Facebook from 'expo-facebook';
import UserContext from 'context/user/user.context';
import { useForm } from 'hooks/useForm';
import { LoginDto } from 'context/user/dtos/login.dto';
import { Collections, Colors, MessagesToast } from 'utils/enums';
import { validationEmail, validationPassword } from 'utils/validations';
import firebase from 'database/firebase';
import { existAccount } from 'utils/actions';
export interface LoginFormProps {
  toast: React.MutableRefObject<any>
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}
 
const LoginForm: React.FC<LoginFormProps> = ({toast,setIsVisible}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {dataForm, onChangeValue} = useForm<LoginDto>({
    email: "",
    password: "",
  })
  const navigation = useNavigation();

  const {singIn} = useContext(UserContext);

  const handleLogin = async() => {
    if(!dataForm.email || !dataForm.password ){
      toast.current.show(MessagesToast.EMPTY);
    }else if(!validationEmail(dataForm.email)){
      toast.current.show(MessagesToast.EMAIL_ERROR);
    }else if(!validationPassword(dataForm.password)){
      toast.current.show(MessagesToast.PASSWORD_LENGTH);
    }else{
      setIsVisible(true);
      try {
        await singIn(dataForm);
        // setIsVisible(false);
        // toast.current.show(MessagesToast.LOGIN_SUCCESS);
      } catch (error) {
        console.log(error);
        setIsVisible(false);
        toast.current.show(MessagesToast.LOGIN_ERROR);
      }
      console.log("INICIAR SESION");
    }
  }

  const signInAsync = async() =>{
    try {
      await GoogleSignIn.initAsync();
      //const usuario = await GoogleSignIn.signInSilentlyAsync();
      await GoogleSignIn.askForPlayServicesAsync(); //usar solo en android
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === "success") {
        onSignIn(user);
        setIsVisible(false);
        console.log(user);
      } else {
        console.log("fallo");
        setIsVisible(false);
        toast.current.show("No ha seleccionado ninguna cuenta de Gmail");
      }
    } catch (error) {
      console.log("error : ", error);
      setIsVisible(false);
      toast.current.show("Error de Inicio de Sesion");
    }
  }

  function onSignIn(googleUser: GoogleSignIn.GoogleUser | null | undefined) {
    const unsubscribe = firebase
      .auth
      .onAuthStateChanged(function (firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.getGoogleCredentials(
            googleUser?.auth?.idToken,
            googleUser?.auth?.accessToken
          );
          // Sign in with credential from the Google user.
          setIsVisible(true);
          firebase
            .auth
            .signInWithCredential(credential)
            .then((response) => {
              setIsVisible(false);
            })
            .catch(function (error) {
              toast.current.show("Error al Iniciar Sesi??n");
              setIsVisible(false);
            });
        } else {
          toast.current.show("El usuario ya se encuentra registrado");
        }
      });
  }

  const isUserEqual =(googleUser: any, firebaseUser: any ) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.getGoogleProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  return (  
    <View style={styles.viewLoginForm}>
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
        placeholder="Contrase??a"
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
      <Button
        title="Iniciar Sesi??n"
        containerStyle={styles.containerBtn}
        buttonStyle={styles.btnLogin}
        titleStyle={styles.titleBtnLogin}
        onPress={handleLogin}
      />
      <Text style={styles.txtMessage}>
        ??No tienes cuenta?{" "}
        <Text style={styles.txtRegister}
          onPress={() => navigation.navigate("register")}
        > 
          Crear Cuenta
        </Text>
      </Text>
      <Divider style={styles.divider}/>
      <Text style={styles.txtOr}>
        Ingresar con
      </Text>
      <View style={styles.viewNetwork}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={signInAsync}
        >
          <Icon
            type="material-community"
            name="google"
            color={Colors.WHITE}
            containerStyle={styles.containerIcon}
            size={30}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity
          activeOpacity={0.5}
          onPress={logIn}
        >
          <Icon
            type="material-community"
            name="facebook"
            color={Colors.WHITE}
            containerStyle={styles.containerIcon}
            size={30}
          />
        </TouchableOpacity> */}
      </View>
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
  viewLoginForm: {
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
  containerIcon: {
    borderRadius: 10,
    width: 100,
    height: 50,
    backgroundColor: Colors.GREENLIGHT,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  viewNetwork: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  divider: {
    backgroundColor: Colors.GREEN,
    height: 2,
    width: "95%",
    alignSelf: "center"
  },
  txtOr: {
    color: Colors.GREEN,
    textAlign: "center",
    fontSize: 14,
    marginVertical: 10
  },
  txtMessage: {
    textAlign: "center",
    marginVertical: 20
  },
  txtRegister: {
    color: Colors.GREEN,
    fontWeight: "bold",
  },
  containerBtn: {
    marginTop: 10,
    width: "90%",
    alignSelf: "center"
  },
  btnLogin: {
    borderRadius: 10,
    backgroundColor: Colors.GREENLIGHT,
  },
  titleBtnLogin: {
    textTransform: "uppercase",
    fontWeight: "bold",
  }
})
 
export default LoginForm;