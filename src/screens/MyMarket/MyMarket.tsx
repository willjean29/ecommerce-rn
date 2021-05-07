import React, { useContext, useEffect, useCallback, useRef, useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Toast from 'react-native-easy-toast';
import ListProducts from 'components/MyMarket/ListProducts';
import SpinnerLoading from 'components/SpinnerLoading';
import Loading from 'components/Loading';
import UserContext from 'context/user/user.context';
import MarketContext from 'context/market/market.context';
import { Colors, MessagesLoading } from 'utils/enums';

export interface MyMarketProps {
  
}
 
const MyMarket: React.FC<MyMarketProps> = () => {
  const {logout,userState} = useContext(UserContext);
  const {loadMyPorducts,marketState} = useContext(MarketContext);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [reloadProducts, setReloadProducts] = useState<boolean>(false);
  const navigation = useNavigation();
  const toast = useRef(null as any);

  useFocusEffect(
    useCallback(() => {
      const getMyProducts = async() => {
        await loadMyPorducts(userState.user?.uid as string);
        setReloadProducts(false);
      }
      getMyProducts();
    }, [reloadProducts])
  );


  if(!marketState.myMarket){
    return (
      <>
        <StatusBar backgroundColor={Colors.GREEN}/>
        <SpinnerLoading/>
      </>
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
              containerStyle={styles.iconCartEmpty}
              onPress={() => navigation.navigate("add-product")}
            />
          </View>
        ) : (
          <ListProducts
            myProducts={marketState.myMarket}
            toast={toast}
            setIsVisible={setIsVisible}
            setReloadProducts={setReloadProducts}
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
      <Toast ref={toast} position="center" opacity={0.8}/>
      <Loading
        isVisible={isVisible}
        text={MessagesLoading.DELETE_PRODUCT}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewMyMarket: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  constinerIcon: {
    position:"absolute",
    right: 10,
    bottom: 10,
    elevation: 5
  },
  conatinerEmpty: {
    flex: 1,
    justifyContent: "center",
  },
  iconCartEmpty: {
    borderWidth: 3,
    borderColor: Colors.GREENLIGHT,
    alignSelf: "center",
    borderRadius: 100,
    padding: 20
  }
})
 
export default MyMarket;