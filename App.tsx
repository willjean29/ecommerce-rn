import React, { useEffect, useState, useContext } from 'react';
import { LogBox } from 'react-native';
import Loading from './src/components/Loading';
import NavigationNoAuthenticate from './src/navigation/NavigationNoAuthenticate';
import SwitchNavigation from './src/navigation/SwitchNavigation';
import UserState from './src/context/user/user.state';
import UserContext from './src/context/user/user.context';
import {MessagesLoading} from './src/utils/enums';
LogBox.ignoreLogs(["Setting a timer"]);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <UserState>
      <SwitchScreens/>
    </UserState>
  )
}

function SwitchScreens() {
  const {userState, reloadUser} = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUserCurrent = async() => {
      setLoading(true);
      await reloadUser();
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
    getUserCurrent();
  }, [])
  if(loading){
    return (
      <Loading isVisible={loading} text={MessagesLoading.LOADING}/>
    )
  }
  return userState.user ? (
    <SwitchNavigation/>
  ) : (
    <NavigationNoAuthenticate/>
  )
}

