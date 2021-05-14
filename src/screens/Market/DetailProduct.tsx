import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import { Route, useNavigation } from '@react-navigation/native';
import { ProductI } from 'context/market/interfaces/product.interface';
import { Colors } from 'utils/enums';
import CarouselImages from 'components/Market/CarouselImages';
import ProductInfo from 'components/Market/ProductInfo';

const screenWidth = Dimensions.get('window').width;
interface DetailProductParams {
  product: ProductI
}
export interface DetailProductProps {
  route: Route<string,DetailProductParams>
}
 
const DetailProduct: React.FC<DetailProductProps> = ({route}) => {
  const {product} = route.params;
  const [activeSlide, setActiveSlide] = useState(0);
  return (  
    <View style={styles.viewDetailProduct}>
      <CarouselImages
        arrayImages={product.images}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        width={screenWidth}
        height={300}
      />
      <ProductInfo
        product={product}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewDetailProduct: {
    backgroundColor: Colors.WHITE,
    flex: 1
  }
})
 
export default DetailProduct;