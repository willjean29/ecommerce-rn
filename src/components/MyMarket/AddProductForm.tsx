import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Input, AirbnbRating, Button, Icon, Avatar } from 'react-native-elements';
import SelectCategory from 'components/MyMarket/SelectCategory';
import SelectImages from 'components/MyMarket/SelectImages';
import { useForm } from 'hooks/useForm';
import { AddProductDto } from 'context/market/dtos/addProduct.dto';
import UserContext from 'context/user/user.context';
import { Colors, MessagesToast } from 'utils/enums';


export interface AddProductFormProps {
  toast: React.MutableRefObject<any>;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}
 
const AddProductForm: React.FC<AddProductFormProps> = ({toast,setIsVisible}) => {
  const {userState} = useContext(UserContext);
  const [uriImages, setUriImages] = useState<string[]>([]);
  const {dataForm,onChangeValue} = useForm<AddProductDto>({
    title: "",
    description: "",
    price: 0,
    rating: 0,
    images: [],
    category: 0,
    createdBy: userState.user?.uid as string
  })
  const handleAddProduct = () => {
    if(!dataForm.title || !dataForm.description || !dataForm.price){
      toast.current.show(MessagesToast.EMPTY);
    }else if(!dataForm.rating){
      toast.current.show(MessagesToast.EMPTY_RATING);
    }else if(!dataForm.images.length){
      toast.current.show(MessagesToast.EMPTY_IMAGES);
    }else if(!dataForm.category){
      toast.current.show(MessagesToast.EMPTY_CATEGORY);
    }else{
      console.log("agregar producto");
    }
  } 
  return (  
    <View style={styles.AddProductForm}>
      <Input
        placeholder="Xiaomi Pocco X3"
        label="Título"
        labelStyle={styles.txtLabel}
        maxLength={30}
        onChangeText={(text: string) => onChangeValue(text,"title")}
      />
      <Input
        placeholder="SmartPhone de gama alta ..."
        inputContainerStyle={styles.inputContainerArea}
        multiline
        label="Descripcion"
        labelStyle={styles.txtLabel}
        maxLength={100}
        onChangeText={(text: string) => onChangeValue(text,"description")}
      />
      <Input
        placeholder="1068.50"
        label="Precio"
        keyboardType="number-pad"
        labelStyle={styles.txtLabel}
        maxLength={7}
        onChangeText={(text: string) => onChangeValue(text,"price")}
      />
      <Text style={styles.txtTitle}>
        Calidad del Producto o Servicio
      </Text>
      <AirbnbRating
        count={5}
        reviews={["Deficiente", "Malo", "Normal", "Bueno", "Excelente"]}
        size={40}
        defaultRating={0}
        onFinishRating={(value: number) => onChangeValue(value,"rating")}
      />

      <SelectImages
        uriImages={uriImages}
        setUriImages={setUriImages}
        toast={toast}
      />
      
      <SelectCategory
        onChangeValue={onChangeValue}
        dataForm={dataForm}
      />

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
  viewCategory: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  viewItemCategory: {
    justifyContent: "center",
    alignItems: "center"
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
    backgroundColor: Colors.GREEN
  }
})
 
export default AddProductForm;
