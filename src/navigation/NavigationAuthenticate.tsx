import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
// import AccountStack from 'navigation/AccountStack';
import MarketStack from 'navigation/MarketStack';
import MyMarketStack from 'navigation/MyMarketStack';
import ProfileStack from 'navigation/ProfileStack';

import { Colors } from 'utils/enums';

const Tab = createBottomTabNavigator();

export interface NavigationAuthenticateProps {
  
}
 
const NavigationAuthenticate: React.FC<NavigationAuthenticateProps> = () => {
  return (  
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="my-market"
        tabBarOptions={{
          inactiveTintColor: Colors.GRAYINACTIVE,
          activeTintColor: Colors.WHITE,
          style: {
            borderTopRightRadius: 60,
            borderTopLeftRadius: 60,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#128c7e",
            paddingBottom: 10,
            paddingTop: 10,
            height: 60
          }
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => screenOptions(route, color)
        })}
      >
        <Tab.Screen
          name="market"
          component={MarketStack}
          options={{
            title: "Tienda"
          }}
        />
        <Tab.Screen
          name="my-market"
          component={MyMarketStack}
          options={{
            title: ""
          }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileStack}
          options={{
            title: "Mi Perfil"
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = (route: any, color: string) => {
  let iconName : string = "";
  let styleIcon: Object = {};
  switch (route.name) {
    case "market":
      iconName = "cart-outline"
      break;
    case "my-market":
      iconName = "store";
      styleIcon = styles.container
      break;
    case "profile":
      iconName = "account-circle-outline"
      break;
    default:
      break;
  }

  return (
    <Icon
      type="material-community"
      name={iconName}
      size={22}
      color={color}
      containerStyle={styleIcon}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GREENLIGHT,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.WHITE,
    width: 80,
    height: 80,
    padding: 10,
    top: -10,
    elevation: 14
  }
})
 
export default NavigationAuthenticate;