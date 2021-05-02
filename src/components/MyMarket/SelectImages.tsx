import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { handleOpenGalery } from 'utils/utils';
import { Colors, Length } from 'utils/enums';

export interface SelectImagesProps {
  toast: React.MutableRefObject<any>;
  uriImages: string[];
  setUriImages: React.Dispatch<React.SetStateAction<string[]>>;
}
 
const SelectImages: React.FC<SelectImagesProps> = ({uriImages,setUriImages,toast}) => {
  const handleSelectImage = async() => {
    const uri = await handleOpenGalery(toast);
    if(uri){
      setUriImages([
        ...uriImages,
        uri
      ]);
    }
  }
  const deleteImage = (uri: string) => {
    Alert.alert(
      "Eliminar Imagen",
      "¿Desea eliminar esta imagen?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Si, eliminar",
          onPress: () => {
            const images = uriImages.filter((uriImage) => uriImage !== uri );
            setUriImages(images);
          }
        }
      ],
      {
        cancelable: true
      }
    )
  }
  return (  
    <>
      <Text style={styles.txtTitle}>
        Cargar Imágenes
      </Text>

      <View style={styles.viewPreviewImages}>
        {
          uriImages.length < Length.IMAGES_LOAD && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleSelectImage}
            >
              <Icon
                type="material-community"
                name="plus"
                containerStyle={styles.containerIconCamera}
              />
            </TouchableOpacity>
          )
        }

        {
          uriImages.map((uri, index) => (
            <Avatar
              source={{uri: uri}}
              size="large"
              avatarStyle={styles.imageProduct}
              key={index}
              onPress={() => deleteImage(uri)}
            />
          ))
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  txtTitle: {
    color: Colors.GREEN,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20
  },
  
  containerIconCamera: {
    backgroundColor: Colors.GRAYINACTIVE,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    height: 70,
    width: 70
  },
  viewPreviewImages: {
    flexDirection: "row",
    justifyContent: "center"
  },
  imageProduct:{
    width: 70,
    height: 70
  }
})
 
export default SelectImages;
