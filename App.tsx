import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import Loading from './src/components/Loading';
import NavigationNoAuthenticate from './src/navigation/NavigationNoAuthenticate';
import SwitchNavigation from './src/navigation/SwitchNavigation';
import { authSesionUser } from './src/utils/actions';

LogBox.ignoreLogs(["Setting a timer"]);
LogBox.ignoreAllLogs();

export default function App() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    authSesionUser(setUser);
    setLoading(false);
  }, [])
  if(loading){
    return (
      <Loading isVisible={loading} text="Cargando ..."/>
    )
  }
  return user ? (
    <SwitchNavigation/>
  ) : (
    <NavigationNoAuthenticate/>
  )
    

}

