import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Route } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-easy-toast';
import EditProductForm from 'components/MyMarket/EditProductForm';
import { Colors, MessagesLoading } from 'utils/enums';
import Loading from 'components/Loading';
import { ProductI } from 'context/market/interfaces/product.interface';

interface EditProductParams {
  uid: string,
  product: ProductI
}
export interface EditProductProps {
  route: Route<string,EditProductParams>
}
 
const EditProduct: React.FC<EditProductProps> = ({route}) => {
  const {uid, product} = route.params;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toast = useRef(null as any);
  return (  
    <KeyboardAwareScrollView style={styles.viewEditProduct} showsVerticalScrollIndicator={false}>
      <EditProductForm
        toast={toast}
        setIsVisible={setIsVisible}
        product={product}
      />
      <Toast ref={toast} position="bottom" opacity={0.8}/>
      <Loading
        isVisible={isVisible}
        text={MessagesLoading.UPDATE_PRODUCT}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  viewEditProduct: {
    flex: 1,
    // backgroundColor: Colors.WHITE
  }
})
 
export default EditProduct;