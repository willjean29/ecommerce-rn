import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Divider, Rating, Avatar, Icon } from 'react-native-elements';
import { ProductI } from 'context/market/interfaces/product.interface';
import { Colors } from 'utils/enums';

export interface ProductInfoProps {
  product: ProductI;
}
 
const ProductInfo: React.FC<ProductInfoProps> = ({product}) => {
  return (  
    <View style={styles.viewProductInfo}>
      <Divider style={styles.dividerTop}/>
      <View style={styles.viewInfoProduct}>
        <Text style={styles.txtTitle}>
          {product.title}
        </Text>
        <Text style={styles.txtPrice}>
          $ {product.price}
        </Text>
        <View>
          <Text style={styles.txtDescription}>
            {product.description}
          </Text>
          <Rating
            startingValue={product.rating}
            ratingCount={product.rating}
            imageSize={30}
            style={styles.rating}
            readonly
          />
        </View>
        <Text style={styles.txtSeller}>
          Contactar al Anunciante
        </Text>
        <View style={styles.viewContactInfo}>
          <Avatar
            source={{uri: product.user?.photoURL}}
            size={60}
            containerStyle={styles.containerImage}
            rounded
          />
          <View style={styles.viewDisplayName}>
            <Text style={styles.txtDisplayNme}>
              {product.user?.displayName}
            </Text>
            <View style={styles.viewIcons}>
              <Icon
                type="material-community"
                name="message-text-outline"
                color={Colors.GREENLIGHT}
                size={40}
                onPress={() => console.log("enviar sms")}
              />
              <Icon
                type="material-community"
                name="whatsapp"
                color={Colors.GREENLIGHT}
                size={40}
                onPress={() => console.log("enviar wsp")}
              />
            </View>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  viewProductInfo: {
    // borderWidth: 2,
    flex: 1,
    top: -50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: Colors.WHITE,
    paddingTop: 20
  },
  dividerTop: {
    backgroundColor: Colors.GREENLIGHT,
    height: 4,
    width: "20%",
    borderRadius: 100,
    marginHorizontal: "40%",
    marginBottom: 20
  },
  viewInfoProduct: {
    marginHorizontal: 10,
    textAlign: "center",
    alignItems: "center"
  },
  txtTitle: {
    color: Colors.GREEN,
    fontWeight: "bold",
    fontSize: 20
  },
  txtPrice: {
    color: Colors.GREEN,
    fontWeight: "600",
    fontSize: 16,
    marginVertical: 10
  },
  txtDescription: {
    textAlign: "center",
    color: Colors.GRAY_OPACITY,
    fontSize: 15
  },
  txtSeller: {
    color: Colors.GREEN,
    fontSize: 20,
    fontWeight: "bold"
  },
  rating:{
    marginVertical: 20
  },
  viewContactInfo: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  containerImage: {
    elevation: 5
  },
  viewDisplayName: {
    marginLeft: 10
  },
  viewIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  txtDisplayNme: {
    color: Colors.GREEN,
    fontWeight: "bold",
    fontSize: 16
  }
})
 
export default ProductInfo;