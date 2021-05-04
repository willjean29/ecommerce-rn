import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Alert } from 'react-native';
import { Image, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { ProductI } from 'context/market/interfaces/product.interface';
import { Collections, Colors, MessagesToast } from 'utils/enums';
import { deleteDataCollection } from 'utils/actions';
export interface ListProductsProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setReloadProducts: React.Dispatch<React.SetStateAction<boolean>>;
  toast: React.MutableRefObject<any>;
  myProducts: ProductI[]
}
 
const ListProducts: React.FC<ListProductsProps> = ({myProducts,toast,setIsVisible,setReloadProducts}) => {
  return (  
    <View style={styles.viewListProducts}>
      <FlatList
        data={myProducts}
        renderItem={({item}) => (
          <ItemProduct 
            product={item}
            toast={toast}
            setIsVisible={setIsVisible}
            setReloadProducts={setReloadProducts}
          />
        )}
        keyExtractor={(item, number) => item.uid}
      />
    </View>
  );
}

interface ItemProductProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setReloadProducts: React.Dispatch<React.SetStateAction<boolean>>;
  toast: React.MutableRefObject<any>;
  product: ProductI
}

const ItemProduct: React.FC<ItemProductProps> = ({product,toast,setIsVisible,setReloadProducts}) => {
  const navigation = useNavigation();
  const deleteImage = () => {
    Alert.alert(
      "Eliminar Producto",
      "¿Desea eliminar esta producto?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Si, eliminar",
          onPress: async() => {
            setIsVisible(true);
            try {
              await deleteDataCollection(Collections.PRODUCTS,product.uid);
              setIsVisible(false);
              setReloadProducts(true);
              toast.current.show(MessagesToast.DELETE_PRODUCT_SUCCESS)
            } catch (error) {
              console.log(error);
              setIsVisible(false);
              toast.current.show(MessagesToast.DELETE_PRODUCT_ERROR)
            }
           
          }
        }
      ],
      {
        cancelable: true
      }
    )
  }
  return (
    <View style={styles.viewItemProduct}>
      <Image
        resizeMode="cover"
        source={{uri: product.images[0]}}
        style={styles.imageProduct}
        PlaceholderContent={<ActivityIndicator size="large" color={Colors.GREEN}/>}
      />
      <View style={styles.viewInfoProduct}>
        <Text style={styles.txtTitle}>
          {product.title}
        </Text>
        <Text style={styles.txtDescription}>
          {
            product.description.length > 40 ? (
              `${product.description.substr(0,40)} ...`
            ) : (
              product.description
            )
          }
        </Text>
        <Text style={styles.txtPrice}>
          $ {product.price}
        </Text>
        <View style={styles.viewButtons}>
          <Icon
            type="material-community"
            name="pencil-outline"
            color={Colors.ORANGE}
            containerStyle={styles.iconEdit}
            onPress={() => navigation.navigate("edit-product",{
              uid: product.uid,
              product
            })}
          />
          <Icon
            type="material-community"
            name="trash-can-outline"
            color={Colors.RED}
            containerStyle={styles.iconDelete}
            onPress={() => deleteImage()}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewListProducts: {
  },
  viewItemProduct: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colors.GRAYINACTIVE,
    marginHorizontal: 10,
    marginVertical: 5
  },
  imageProduct: {
    borderRadius: 10,
    width: 140,
    flex: 1,
  },
  viewInfoProduct: {
    flex: 1, 
    justifyContent: "center",
  },
  txtTitle: {
    marginTop: 10,
    fontSize: 18,
    color: Colors.GREEN,
    fontWeight: "bold",
    textAlign: "center"
  },
  txtDescription: {
    paddingHorizontal: 10,
    marginVertical: 5,
    textAlign: "center",
    fontSize: 14,
    color: Colors.GRAY_OPACITY
  },
  txtPrice: {
    fontSize: 16,
    color: Colors.GREEN,
    textAlign: "center"
  },
  viewButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,

  },
  iconEdit: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    borderColor: Colors.ORANGE,
    marginRight: 10
  },
  iconDelete: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    borderColor: Colors.RED,
  }
})
 
export default ListProducts;
