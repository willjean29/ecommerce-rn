import React from 'react';
import { LogBox } from 'react-native';
import NavigationAuthenticate from './src/navigation/NavigationAuthenticate';
import NavigationNoAuthenticate from './src/navigation/NavigationNoAuthenticate';

LogBox.ignoreLogs(["Setting a timer"]);
LogBox.ignoreAllLogs();

export default function App() {
  const user = true;

  return (
    // <NavigationAuthenticate/>
    <NavigationNoAuthenticate/>
  );
}

