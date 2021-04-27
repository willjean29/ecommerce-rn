import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import UserContext from 'context/user/user.context';
import { Colors } from 'utils/enums';
export interface MyMarketProps {
  
}
 
const MyMarket: React.FC<MyMarketProps> = () => {
  const {logout,userState} = useContext(UserContext);
  const navigation = useNavigation();
  return (  
    <View style={styles.viewMyMarket}>
      <Icon
        type="material-community"
        name="plus"
        reverse
        color={Colors.GREEN}
        containerStyle={styles.constinerIcon}
        onPress={() => navigation.navigate("add-product")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewMyMarket: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  constinerIcon: {
    position:"absolute",
    right: 10,
    bottom: 10,
    elevation: 5
  }
})
 
export default MyMarket;