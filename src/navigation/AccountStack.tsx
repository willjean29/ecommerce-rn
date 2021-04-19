import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SendConfirm from 'screens/Account/SendConfirm';
import ConfirmPhone from 'screens/Account/ConfirmPhone';
import { Colors } from 'utils/enums';


const Stack = createStackNavigator();

export interface AccountStackProps {
  
}
 
const AccountStack: React.FC<AccountStackProps> = () => {
  return (  
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: Colors.GREEN,
          },
          headerTintColor: Colors.WHITE
        }}
      >
        <Stack.Screen
          name="confirm-phone"
          component={ConfirmPhone}
          options={{
            title: "Confirmar Número de Teléfono"
          }}
        />
        <Stack.Screen
          name="send-confirm"
          component={SendConfirm}
          options={{
            title: "Enviar Confirmación"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );

}
 
export default AccountStack;