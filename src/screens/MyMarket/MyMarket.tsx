import React, { useContext } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import UserContext from 'context/user/user.context';
export interface MyMarketProps {
  
}
 
const MyMarket: React.FC<MyMarketProps> = () => {
  const {logout,userState} = useContext(UserContext);
  console.log(userState.user);
  return (  
    <View>
      <Text>My Market</Text>
      <Button
        title="Cerrar Sesión"
        onPress={async() => {
          console.log("cerrar sesion")
          await logout();
        }}
      />
    </View>
  );
}
 
export default MyMarket;