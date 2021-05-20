import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image, Avatar, Rating } from 'react-native-elements';
import SpinnerLoading from 'components/SpinnerLoading';
import { ProductI } from 'context/market/interfaces/product.interface';
import { Colors } from 'utils/enums';
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
        <Text
          style={styles.txtEmpty}
        >
          No se encontrarón resultados
        </Text>
      </View>
    )
  }
  return (  
    <View 
      style={styles.viewContainerList}
    >
      <FlatList
        data={products}
        renderItem={({item}) => (
          <ItemPorduct
            product={item}
          />
        )}
        keyExtractor={(item, number) => item.uid}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

interface ItemPorduct {
  product: ProductI
}

const ItemPorduct: React.FC<ItemPorduct> = ({product}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.viewProduct}
      activeOpacity={0.5}
      onPress={() => navigation.navigate("detail-product",{product})}
    >
      <Avatar
        source={{uri: product.images[0]}}
        size={100}
        rounded
        renderPlaceholderContent={<ActivityIndicator size="large" color={Colors.GREEN}/>}
        containerStyle={styles.containerImage}
      />
      <View style={styles.viewInfoProduct}>
        <View style={styles.viewRatingPrice}>
          <Rating
            startingValue={product.rating}
            ratingCount={product.rating}
            // ratingColor="#000"
            // type="custom"
            imageSize={15}
            readonly
          />
          <Text style={styles.txtPrice}>
            $ {product.price}
          </Text>
        </View>
        <Text style={styles.txtTitle}>
          {product.title}
        </Text>
        <View style={styles.viewFooterProduct}>
          <Text style={styles.txtLabelAuthor}>
            Vendido por
          </Text>
          <View style={styles.viewAuthor}>
            <Avatar
              source={{uri: product.user?.photoURL}}
              size={25}
              rounded
            />
            <Text style={styles.txtAuthor}>
              {product.user?.displayName}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1
  },
  containerImgEmpty: {
    marginTop: "15%",
    alignItems: "center"
  },
  imageEmpty: {
    height: 200,
    width: 200
  },
  txtEmpty: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.GREEN
  },
  viewContainerList: {
    flex: 1,
    marginTop: 10,
  },
  viewProduct: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.WHITE,
    elevation: 5,
  },
  containerImage: {
    elevation: 2,
    backgroundColor: Colors.GRAY_OPACITY
  },
  viewInfoProduct: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 15,
  },
  viewRatingPrice: {
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  txtPrice: {
    color: Colors.GREENLIGHT,
    fontWeight: "bold",
  },
  txtTitle:{
    color: Colors.GREEN,
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 18
  },
  viewFooterProduct: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  txtLabelAuthor: {
    color: Colors.GREEN
  },
  viewAuthor: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  txtAuthor: {
    fontSize: 12,
    marginLeft: 10
  }
})
 
export default ListProducts;
