import React, { useContext, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import ListProducts from 'components/MyMarket/ListProducts';
import SpinnerLoading from 'components/SpinnerLoading';
import UserContext from 'context/user/user.context';
import MarketContext from 'context/market/market.context';
import { Colors } from 'utils/enums';

export interface MyMarketProps {
  
}
 
const MyMarket: React.FC<MyMarketProps> = () => {
  const {logout,userState} = useContext(UserContext);
  const {loadMyPorducts,marketState} = useContext(MarketContext);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const getMyProducts = async() => {
        await loadMyPorducts(userState.user?.uid as string);
      }
      getMyProducts();
    }, [])
  );


  if(!marketState.myMarket){
    return (
      <SpinnerLoading/>
    )
  }

  return (  
    <View style={styles.viewMyMarket}>
      <StatusBar backgroundColor={Colors.GREEN}/>
      {
        !marketState.myMarket.length ? (
          <View style={styles.conatinerEmpty}>
            <Icon
              type="material-community"
              name="cart-plus"
              color={Colors.GREENLIGHT}
              size={120}
            />
          </View>
        ) : (
          <ListProducts
            myProducts={marketState.myMarket}
          />
        )
      }
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
  },
  conatinerEmpty: {
    flex: 1,
    justifyContent: "center"
  }
})
 
export default MyMarket;