import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Loading from 'components/Loading';
import NavigationAuthenticate from 'navigation/NavigationAuthenticate';
import AccountStack from 'navigation/AccountStack';
import { validationPhone } from 'utils/actions';

export interface SwitchNavigationProps {
  
}
 
const SwitchNavigation: React.FC<SwitchNavigationProps> = () => {
  const [phoneAuth, setPhoneAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    validationPhone(setPhoneAuth);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])

  if(loading) {
    return (
      <Loading isVisible={loading} text="Cargando Configuración"/>
    )
  }else{
    return phoneAuth ? (
      <NavigationAuthenticate/>
    ) : (
      <AccountStack/>
    )
  }
}
 
export default SwitchNavigation;
