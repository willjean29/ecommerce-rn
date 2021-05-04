import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-easy-toast';
import AddProductForm from 'components/MyMarket/AddProductForm';
import { Colors, MessagesLoading } from 'utils/enums';
import Loading from 'components/Loading';

export interface AddProductProps {
  
}
 
const AddProduct: React.FC<AddProductProps> = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toast = useRef(null as any);
  return (  
    <KeyboardAwareScrollView style={styles.viewAddProduct} showsVerticalScrollIndicator={false}>
      <AddProductForm
        toast={toast}
        setIsVisible={setIsVisible}
      />
      <Toast ref={toast} position="bottom" opacity={0.8}/>
      <Loading
        isVisible={isVisible}
        text={MessagesLoading.ADD_PRODUCT}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  viewAddProduct: {
    flex: 1,
    // backgroundColor: Colors.WHITE
  }
})
 
export default AddProduct;