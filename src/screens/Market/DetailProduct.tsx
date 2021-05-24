import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import { Route, useNavigation } from '@react-navigation/native';
import { ProductI } from 'context/market/interfaces/product.interface';
import { Colors, MessagesLoading } from 'utils/enums';
import Loading from 'components/Loading';
import CarouselImages from 'components/Market/CarouselImages';
import ProductInfo from 'components/Market/ProductInfo';
import ModalSendMessage from 'components/Market/ModalSendMessage';
const screenWidth = Dimensions.get('window').width;
interface DetailProductParams {
  product: ProductI
}
export interface DetailProductProps {
  route: Route<string,DetailProductParams>
}
 
const DetailProduct: React.FC<DetailProductProps> = ({route}) => {
  const {product} = route.params;
  const [watchLoading, setWtchLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);
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
        setIsVisible={setIsVisible}
      />
      <ModalSendMessage
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setWtchLoading={setWtchLoading}
        product={product}
      />
      <Loading
        isVisible={watchLoading}
        text={MessagesLoading.SEND_MESSAGE}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewDetailProduct: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    // borderWidth: 2
  }
})
 
export default DetailProduct;