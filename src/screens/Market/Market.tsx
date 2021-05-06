import React, { useContext, useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, StatusBar, ActivityIndicator, Dimensions} from 'react-native';
import { Image, Icon, Avatar, Badge} from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useFocusEffect } from '@react-navigation/native';
import SearchProduct from 'components/Market/SearchProduct';
import FilterCategory from 'components/Market/FilterCategory';
import ListProducts from 'components/Market/ListProducts';
import UserContext from 'context/user/user.context';
import MarketContext from 'context/market/market.context';
import { Colors } from 'utils/enums';
import Logo from 'assets/img/logo.png';
import UserDefault from 'assets/img/avatar.jpg';

export interface MarketProps {
  
}

const height = Dimensions.get("window").height;

const Market: React.FC<MarketProps> = () => {
  const [category, setCategory] = useState<number>(0);
  const {userState} = useContext(UserContext);
  const {marketState,loadAllProducts} = useContext(MarketContext);
  useFocusEffect(
    useCallback(() => {
      loadAllProducts();
    }, [])
  )

  return (  
    <KeyboardAwareScrollView style={styles.viewMarket}>
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
        <SearchProduct/>
      </View>
      <FilterCategory
        category={category}
        setCategory={setCategory}
      />
      <ListProducts
        products={marketState.market}
      />
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  viewMarket: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    // borderWidth: 4
  },
  viewHeader: {
    backgroundColor: Colors.GREEN,
    height: height*0.2,
    // borderWidth: 1
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