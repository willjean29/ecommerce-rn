import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationAuthenticate from './src/navigation/NavigationAuthenticate';
import NavigationNoAuthenticate from './src/navigation/NavigationNoAuthenticate';
export default function App() {
  const user = true;

  return (
    // <NavigationAuthenticate/>
    <NavigationNoAuthenticate/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
