import React, { useEffect, useState, useContext } from 'react';
import { View } from 'react-native';
import Loading from 'components/Loading';
import NavigationAuthenticate from 'navigation/NavigationAuthenticate';
import AccountStack from 'navigation/AccountStack';
import UserContext from 'context/user/user.context';
// import { validationPhone } from 'utils/actions';

export interface SwitchNavigationProps {
  
}
 
const SwitchNavigation: React.FC<SwitchNavigationProps> = () => {
  const [phoneAuth, setPhoneAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const {validatioPhone} = useContext(UserContext);
  useEffect(() => {
    validatioPhone(setPhoneAuth);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
