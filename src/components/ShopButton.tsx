import * as React from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {Icon} from 'react-native-elements';
export interface ShopButtonProps {
  
}
 
const ShopButton: React.SFC<ShopButtonProps> = () => {
  const navigation = useNavigation();
  return (  
    // <TouchableWithoutFeedback
    //   onPress={() => navigation.navigate("my-market")}
    // >
      <Icon
        type="material-community"
        name="store"
        size={22}
        color="#fff"
        containerStyle={styles.container}
        onPress={() => navigation.navigate("my-market")}
      />

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25D366",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFF",
    width: 80,
    height: 80,
    padding: 10,
    top: -10,
    // elevation: 14
  }
})
 
export default ShopButton;