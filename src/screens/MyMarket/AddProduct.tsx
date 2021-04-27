import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AddProductForm from 'components/MyMarket/AddProductForm';
import { Colors } from 'utils/enums';

export interface AddProductProps {
  
}
 
const AddProduct: React.FC<AddProductProps> = () => {
  return (  
    <KeyboardAwareScrollView style={styles.viewAddProduct} showsVerticalScrollIndicator={false}>
      <AddProductForm/>
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