import React, { useContext, useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, StatusBar, ActivityIndicator, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Image, Icon, Avatar, Badge} from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useFocusEffect } from '@react-navigation/native';
import SearchProduct from 'components/Market/SearchProduct';
import FilterCategory from 'components/Market/FilterCategory';
import ListProducts from 'components/Market/ListProducts';
import UserContext from 'context/user/user.context';
import MarketContext from 'context/market/market.context';
import { CategoryTypes, Colors } from 'utils/enums';
import Logo from 'assets/img/logo.png';
import UserDefault from 'assets/img/avatar.jpg';

export interface MarketProps {
  
}

const height = Dimensions.get("window").height;

const Market: React.FC<MarketProps> = () => {
  const [category, setCategory] = useState<number>(0);
  const {userState} = useContext(UserContext);
  const {marketState,loadAllProducts,loadProductsCategory} = useContext(MarketContext);
  useFocusEffect(
    useCallback(() => {
      if(category !== CategoryTypes.DEFAULT){
        loadProductsCategory(category);
      }else{
        loadAllProducts();
      }
    }, [category])
  )

  // useEffect(() => {
  //   if(category !== CategoryTypes.DEFAULT){
  //     loadProductsCategory(category);
  //   }else{
  //     loadAllProducts();
  //   }
  // }, [category])

  return (  
    <View style={styles.viewMarket}>
      <StatusBar backgroundColor={Colors.GREEN}/>
      <View style={styles.viewHeader}>
        <View style={styles.viewMenuHeader}>
          <Avatar
            source={
              userState.user?.photoURL ? (
                {uri: userState.user.photoURL}
              ) : (UserDefault)
            }
            size={50}
            avatarStyle={styles.avatarUser}
            renderPlaceholderContent={<ActivityIndicator size="large" color={Colors.GREEN}/>}
          />
          <Image
            source={Logo}
            style={styles.imageLogo}
          />
          <View>
            <Icon
              type="material-community"
              name="bell-outline"
              color={Colors.WHITE}
              size={30}
            />
            <Badge
              status="error"
              containerStyle={styles.badgeContainer}
              value={2}
            />
          </View>
        </View>
        <SearchProduct
          setCategory={setCategory}
        />
      </View>
      <FilterCategory
        category={category}
        setCategory={setCategory}
      />
      <ListProducts
        products={marketState.market}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  viewMarket: {
    backgroundColor: Colors.WHITE,
    flex: 1
  },
  viewHeader: {
    backgroundColor: Colors.GREEN,
    height: height*0.2,
  },
  viewMenuHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20
  },
  avatarUser: {
    borderRadius: 100,
  },
  imageLogo: {
    height: 50,
    width: 50
  },
  badgeContainer: {
    position: "absolute",
    top: -4,
    right: -4
  }
})
 
export default Market;