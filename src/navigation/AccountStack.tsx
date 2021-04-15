import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SendConfirm from 'screens/Account/SendConfirm';
import ConfirmPhone from 'screens/Account/ConfirmPhone';
import Login from 'screens/Account/Login';
import Register from 'screens/Account/Register';
import ResetPassword from 'screens/Account/ResetPassword';

const Stack = createStackNavigator();

export interface AccountStackProps {
  
}
 
const AccountStack: React.FC<AccountStackProps> = () => {
  const user = true;
  if(user){
    return (  
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: "Iniciar Sesión"
          }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{
            title: "Registrarse"
          }}
        />
        <Stack.Screen
          name="reset-password"
          component={ResetPassword}
          options={{
            title: "Recuperar Contraseña"
          }}
        />
      </Stack.Navigator>
    );
  }else{
    return (  
      <Stack.Navigator>
        <Stack.Screen
          name="send-confirm"
          component={SendConfirm}
          options={{
            title: "Enviar Confirmación"
          }}
        />
        <Stack.Screen
          name="confirm-phone"
          component={ConfirmPhone}
          options={{
            title: "Confirmar Número"
          }}
        />
      </Stack.Navigator>
    );
  }

}
 
export default AccountStack;