import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import { AddProductDto } from 'context/market/dtos/addProduct.dto';
import { CategoryTypes, Colors } from 'utils/enums';

export interface SelectedCategoryProps {
  dataForm: AddProductDto;
  onChangeValue: (value: string | number, key: keyof AddProductDto) => void
}
 
const SelectCategory: React.FC<SelectedCategoryProps> = ({dataForm,onChangeValue}) => {
  return (  
    <>
      <Text style={styles.txtTitle}>
        Asignar Categoría
      </Text>
      <View style={styles.viewCategory}>
        <View style={styles.viewItemCategory}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onChangeValue(CategoryTypes.BOOKS,"category")}
          >
            <Icon
              type="material-community"
              name="book-open"
              size={28}
              color={dataForm.category === CategoryTypes.BOOKS ? Colors.GREEN : Colors.GRAY_OPACITY }
              reverse
            />
          </TouchableOpacity>
          <Text style={styles.txtCategory}>
            Libros
          </Text>
        </View>
        <View style={styles.viewItemCategory}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onChangeValue(CategoryTypes.IDEAS,"category")}
          >
            <Icon
              type="material-community"
              name="lightbulb-on-outline"
              size={28}
              color={dataForm.category === CategoryTypes.IDEAS ? Colors.GREEN : Colors.GRAY_OPACITY }
              reverse
            />
          </TouchableOpacity>
          <Text style={styles.txtCategory}>
            Ideas
          </Text>
        </View>
        <View style={styles.viewItemCategory}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onChangeValue(CategoryTypes.ARTICLES,"category")}
          >
            <Icon
              type="material-community"
              name="cart-arrow-down"
              size={28}
              color={dataForm.category === CategoryTypes.ARTICLES ? Colors.GREEN : Colors.GRAY_OPACITY }
              reverse
            />
          </TouchableOpacity>
          <Text style={styles.txtCategory}>
            Artículos
          </Text>
        </View>
        <View style={styles.viewItemCategory}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onChangeValue(CategoryTypes.SERVICES,"category")}
          >
            <Icon
              type="material-community"
              name="account"
              size={28}
              color={dataForm.category === CategoryTypes.SERVICES ? Colors.GREEN : Colors.GRAY_OPACITY }
              reverse
            />
          </TouchableOpacity>
          <Text style={styles.txtCategory}>
            Servicios
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  viewCategory: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  viewItemCategory: {
    justifyContent: "center",
    alignItems: "center"
  },
  txtTitle: {
    color: Colors.GREEN,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20
  },
  txtCategory: {
    textAlign: "center"
  },
})
 
export default SelectCategory;
