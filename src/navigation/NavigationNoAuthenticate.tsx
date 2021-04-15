import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AccountStack from 'navigation/AccountStack';
export interface NavigationNoAuthenticateProps {
  
}
 
const NavigationNoAuthenticate: React.FC<NavigationNoAuthenticateProps> = () => {
  return (  
    <NavigationContainer>
      <AccountStack/>
    </NavigationContainer>
  );
}
 
export default NavigationNoAuthenticate;