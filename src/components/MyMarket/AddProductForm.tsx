import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, AirbnbRating, Button, Icon } from 'react-native-elements';
import { Colors } from 'utils/enums';
export interface AddProductFormProps {
  
}
 
const AddProductForm: React.FC<AddProductFormProps> = () => {
  return (  
    <View style={styles.AddProductForm}>
      <Input
        placeholder="Título"
      />
      <Input
        placeholder="Descripción"
        inputContainerStyle={styles.inputContainerArea}
        multiline
      />
      <Input
        placeholder="Precio"
        keyboardType="number-pad"
      />
      <Text style={styles.txtTitle}>
        Calidad del Producto o Servicio
      </Text>
      <AirbnbRating
        count={5}
        reviews={["Deficiente", "Malo", "Normal", "Bueno", "Excelente"]}
        size={40}
      />
      <Text style={styles.txtTitle}>
        Cargar Imágenes
      </Text>
      <Icon
        type="material-community"
        name="camera"
        containerStyle={styles.containerIcon}
        size={30}
        onPress={() => console.log("Cargar Imágenes")}
      />
      <Text style={styles.txtTitle}>
        Asignar Categoría
      </Text>
      <Button
        title="Agregar Nuevo Producto"
        buttonStyle={styles.btnAddProduct}
        containerStyle={styles.containerBtnAddProduct}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  AddProductForm: {
    marginHorizontal: 10,
    marginTop: 10
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
  containerIcon: {
    backgroundColor: Colors.GRAYINACTIVE,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    height: 70,
    width: 70
  },
  containerBtnAddProduct: {
    width: "95%",
    alignSelf: "center",
    marginBottom: 30
  },
  btnAddProduct: {
    borderRadius: 10,
    backgroundColor: Colors.GREEN,
    // marginBottom: 30
  }
})
 
export default AddProductForm;
