import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Image } from 'react-native-elements';
import SpinnerLoading from 'components/SpinnerLoading';
import { ProductI } from 'context/market/interfaces/product.interface';
import CartEmpty from 'assets/img/empty_cart.png';
export interface ListProductsProps {
  products: ProductI[] | null;
}
 
const ListProducts: React.FC<ListProductsProps> = ({products}) => {
  if(!products){
    return (
      <View style={styles.containerLoading}>
        <SpinnerLoading/>
      </View>

    )
  }
  if(!products.length){
    return(
      <View style={styles.containerImgEmpty}>
        <Image
          source={CartEmpty}
          style={styles.imageEmpty}
        />
      </View>
    )
  }
  return (  
    <View>
      <Text>
        LISTA DE PRODUCTOS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLoading: {
    marginTop: "30%"
  },
  containerImgEmpty: {
    marginTop: "15%",
    alignItems: "center"
  },
  imageEmpty: {
    height: 200,
    width: 200
  }
})
 
export default ListProducts;
