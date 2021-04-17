import React from 'react';
import NavigationAuthenticate from './src/navigation/NavigationAuthenticate';
import NavigationNoAuthenticate from './src/navigation/NavigationNoAuthenticate';
export default function App() {
  const user = true;

  return (
    // <NavigationAuthenticate/>
    <NavigationNoAuthenticate/>
  );
}

