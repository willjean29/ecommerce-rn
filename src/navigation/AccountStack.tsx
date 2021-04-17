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
 
export default AccountStack;