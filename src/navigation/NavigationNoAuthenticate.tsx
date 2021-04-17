import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from 'screens/Account/Login';
import Register from 'screens/Account/Register';
import ResetPassword from 'screens/Account/ResetPassword';

const Stack = createStackNavigator();
export interface NavigationNoAuthenticateProps {
  
}
 
const NavigationNoAuthenticate: React.FC<NavigationNoAuthenticateProps> = () => {
  return (  
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
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
    </NavigationContainer>
  );
}
 
export default NavigationNoAuthenticate;