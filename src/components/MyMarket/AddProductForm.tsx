import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, AirbnbRating, Button, Icon } from 'react-native-elements';
import { AddProductDto } from 'context/market/dtos/addProduct.dto';
import { CategoryTypes, Colors } from 'utils/enums';
import { useForm } from 'hooks/useForm';
export interface AddProductFormProps {
  
}
 
const AddProductForm: React.FC<AddProductFormProps> = () => {
  const {dataForm,onChangeValue} = useForm<AddProductDto>({
    title: "",
    description: "",
    price: 0,
    rating: 0,
    images: [],
    category: 0
  })
  const handleAddProduct = () => {

  }
  return (  
    <View style={styles.AddProductForm}>
      <Input
        placeholder="Xiaomi Pocco X3"
        label="Título"
        labelStyle={styles.txtLabel}
        maxLength={30}
        leftIcon={
          <Icon
            type="material-community"
            name="format-text"
          />
        }
        onChangeText={(text: string) => onChangeValue(text,"title")}
      />
      <Input
        placeholder="SmartPhone de gama alta ..."
        inputContainerStyle={styles.inputContainerArea}
        multiline
        label="Descripcion"
        labelStyle={styles.txtLabel}
        maxLength={100}
        leftIcon={
          <Icon
            type="material-community"
            name="card-text-outline"
          />
        }
        onChangeText={(text: string) => onChangeValue(text,"description")}
      />
      <Input
        placeholder="1068.50"
        label="Precio"
        keyboardType="number-pad"
        labelStyle={styles.txtLabel}
        maxLength={7}
        leftIcon={
          <Icon
            type="material-community"
            name="currency-usd"
          />
        }
        onChangeText={(text: string) => onChangeValue(text,"price")}
      />
      <Text style={styles.txtTitle}>
        Calidad del Producto o Servicio
      </Text>
      <AirbnbRating
        count={5}
        reviews={["Deficiente", "Malo", "Normal", "Bueno", "Excelente"]}
        size={40}
        defaultRating={3}
        onFinishRating={(value: number) => onChangeValue(value,"rating")}
      />
      <Text style={styles.txtTitle}>
        Cargar Imágenes
      </Text>
      <Icon
        type="material-community"
        name="plus"
        containerStyle={styles.containerIconCamera}
        size={30}
        onPress={() => console.log("Cargar Imágenes")}
      />
      <Text style={styles.txtTitle}>
        Asignar Categoría
      </Text>
      <View style={styles.viewCategory}>
        <View style={styles.viewItemCategory}>
          <Button
            buttonStyle={
              dataForm.category === CategoryTypes.BOOKS ? {...styles.btnCategory,...styles.btnCategorySelected} : styles.btnCategory
            }
            icon={
              <Icon
                type="material-community"
                name="camera"
              />
            }
            onPress={() => onChangeValue(CategoryTypes.BOOKS,"category")}
          />
          <Text style={styles.txtCategory}>
            Libros
          </Text>
        </View>
        <View style={styles.viewItemCategory}>
          <Button
            buttonStyle={
              dataForm.category === CategoryTypes.IDEAS ? {...styles.btnCategory,...styles.btnCategorySelected} : styles.btnCategory
            }
            icon={
              <Icon
              type="material-community"
              name="camera"
              />
            }
            onPress={() => onChangeValue(CategoryTypes.IDEAS,"category")}
          />
          <Text style={styles.txtCategory}>
            Ideas
          </Text>
        </View>
        <View style={styles.viewItemCategory}>
          <Button
            buttonStyle={
              dataForm.category === CategoryTypes.ARTICLES ? {...styles.btnCategory,...styles.btnCategorySelected} : styles.btnCategory
            }
            icon={
              <Icon
              type="material-community"
              name="camera"
              />
            }
            onPress={() => onChangeValue(CategoryTypes.ARTICLES,"category")}
          />
          <Text style={styles.txtCategory}>
            Actículos
          </Text>
        </View>
        <View style={styles.viewItemCategory}>
          <Button
            buttonStyle={
              dataForm.category === CategoryTypes.SERVICES ? {...styles.btnCategory,...styles.btnCategorySelected} : styles.btnCategory
            }
            icon={
              <Icon
              type="material-community"
              name="camera"
              />
            }
            onPress={() => onChangeValue(CategoryTypes.SERVICES,"category")}
          />
          <Text style={styles.txtCategory}>
            Servicios
          </Text>
        </View>
      </View>

      <Button
        title="Agregar Nuevo Producto"
        buttonStyle={styles.btnAddProduct}
        containerStyle={styles.containerBtnAddProduct}
        onPress={handleAddProduct}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  AddProductForm: {
    marginHorizontal: 10,
    marginTop: 20
  },
  inputContainerArea: {
    height: 100,
    padding: 0,
    margin: 0
  },
  txtTitle: {
    color: Colors.GREEN,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20
  },
  txtLabel: {
    color: Colors.GREEN,
  },
  containerIconCamera: {
    backgroundColor: Colors.GRAYINACTIVE,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    height: 70,
    width: 70
  },
  viewCategory: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  viewItemCategory: {
    justifyContent: "center",
    alignItems: "center"
  },
  btnCategory: {
    backgroundColor: Colors.GRAYINACTIVE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    height: 60,
    width: 60
  },
  btnCategorySelected: {
    backgroundColor: Colors.GREEN
  },
  containerbtnCategory: {
    // backgroundColor: Colors.GREEN,
  },
  txtCategory: {
    textAlign: "center"
  },
  containerBtnAddProduct: {
    width: "95%",
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 20
  },
  btnAddProduct: {
    borderRadius: 10,
    backgroundColor: Colors.GREEN,
    // marginBottom: 30
  }
})
 
export default AddProductForm;
