import React, { useContext } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { 
  createDrawerNavigator, 
  DrawerContentComponentProps, 
  DrawerContentOptions, 
  DrawerContentScrollView, 
  DrawerItem 
} from '@react-navigation/drawer';
import { Icon, Avatar, Button } from 'react-native-elements';
import NavigationAuthenticate from 'navigation/NavigationAuthenticate';
import UserContext from 'context/user/user.context';
import UserDefault from 'assets/img/avatar.jpg';

const Drawer = createDrawerNavigator();

export interface DrawerNavigationProps {
  
}
 
const DrawerNavigation: React.FC<DrawerNavigationProps> = () => {
  return (  
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContentCustom {...props}/>}
      >
        <Drawer.Screen
          name="markets"
          component={NavigationAuthenticate}
          options={{
            title: "Tienda",
            headerShown: false,
            drawerIcon: (props) => (
              <Icon type="material-community" name="store" size={24} />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



const DrawerContentCustom = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
  const {userState,logout} = useContext(UserContext)
  return (
    <View style={styles.viewDrawerCustom}>
      <DrawerContentScrollView {...props}>
        <View style={styles.viewContainerDrawer}>
          <View style={styles.viewInfoSection}>
            <Avatar
              source={
                userState.user?.photoURL ? (
                  {uri: userState.user?.photoURL}
                ) : (UserDefault)
              }
              size={50}
              rounded
            />
            <View style={styles.viewDataUser}>
              <Text style={styles.txtDisplayName}>
                {userState.user?.displayName ? userState.user?.displayName : "Anonimo"}
              </Text>
              <Text style={styles.txtEmail}>
                {userState.user?.email}
              </Text>
            </View>
          </View>
          <View style={styles.viewDrawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="cart-outline"
                  color={color}
                  size={size}
                  type="material-community"
                />
              )}
              label="Tienda"
              onPress={() => {
                props.navigation.navigate("market")
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="store-outline"
                  color={color}
                  size={size}
                  type="material-community"
                />
              )}
              label="Mi Tienda"
              onPress={() => {
                props.navigation.navigate("my-market")
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="account-outline"
                  color={color}
                  size={size}
                  type="material-community"
                />
              )}
              label="Cuenta"
              onPress={() => {
                props.navigation.navigate("profile")
              }}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.viewDrawerLogout}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
              type="material-community"
            />
          )}
          label="Cerrar Sesión"
          onPress={() => {
            logout();
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewDrawerCustom: {
    flex: 1,
  },
  viewContainerDrawer: {

  },
  viewInfoSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  viewDataUser: {
    flex: 1,
    marginLeft: 15
  },
  txtDisplayName: {
    fontWeight: "bold",
    fontSize: 16
  },
  txtEmail: {
    fontWeight: "600"
  },
  viewDrawerSection: {
 
  },
  viewDrawerLogout: {

  }
})
 
export default DrawerNavigation;
