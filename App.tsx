import React, { useEffect, useState, useContext, useRef } from 'react';
import { LogBox } from 'react-native';
import Loading from './src/components/Loading';
import NavigationNoAuthenticate from './src/navigation/NavigationNoAuthenticate';
import SwitchNavigation from './src/navigation/SwitchNavigation';
import UserState from './src/context/user/user.state';
import MarketState from './src/context/market/market.state';
import MessagesState from './src/context/messages/messages.state';
import UserContext from './src/context/user/user.context';
import {MessagesLoading} from './src/utils/enums';
import {initialNotifications} from './src/utils/actions';


LogBox.ignoreLogs(["Setting a timer"]);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <UserState>
      <MarketState>
        <MessagesState>
          <SwitchScreens/>
        </MessagesState>
      </MarketState>
    </UserState>
  )
}

function SwitchScreens() {
  const {userState, reloadUser} = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  // ref for push notifications
  const notificationListener = useRef(null as any);
  const responseListener = useRef(null as any);
  useEffect(() => {
    const getUserCurrent = async() => {
      setLoading(true);
      await reloadUser();
      initialNotifications(notificationListener,responseListener);
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

