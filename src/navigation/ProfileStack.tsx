import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from 'screens/Profile/Profile';
const Stack = createStackNavigator();

export interface ProfileStackProps {
  
}
 
const ProfileStack: React.FC<ProfileStackProps> = () => {
  return (  
    <Stack.Navigator>
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{
          title: "Mi Cuenta"
        }}
      />
    </Stack.Navigator>
  );
}
 
export default ProfileStack;