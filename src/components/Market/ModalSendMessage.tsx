import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import { Avatar, Input, Button } from 'react-native-elements';
import Modal from 'components/Modal';
import { ProductI } from 'context/market/interfaces/product.interface';
import { Collections, Colors } from 'utils/enums';
import UserContext from 'context/user/user.context';
import { addDataCollection, addRegisterCollection, sendPushNotification, setMessageNotification } from 'utils/actions';
import { MessagesDto } from 'context/messages/dtos/messages.dto';
export interface ModalSendMessageProps {
  product: ProductI;
  isVisible: boolean;
  setWtchLoading: React.Dispatch<React.SetStateAction<boolean>>
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}
 
const ModalSendMessage: React.FC<ModalSendMessageProps> = ({isVisible, setIsVisible, product,setWtchLoading}) => {
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    empty: ""
  });
  const {userState} = useContext(UserContext);
  const handleSendMessage = async() => {
    if(!message){
      setErrors({
        empty: "El mensaje es obligatorio"
      })
    }else{
      setErrors({
        empty: ""
      })
      const notification: MessagesDto = {
        sender: userState.user?.uid as string,
        receiver: product.user?.uid as string,
        message,
        createdAt: new Date(),
        productUid: product.uid,
        productTitle: product.title,
        viewed: 0,
      };
      setWtchLoading(true);
      try {
        const response = await addDataCollection(Collections.NOTIFICATIONS,notification);
        if(response){
          setWtchLoading(false);
          Alert.alert(
            "Mensaje Exitoso",
            "Se ha enviado el mensaje correctamente",
            [
              {
                style: "cancel",
                text: "Entendido",
                onPress: () => setIsVisible(false)
              }
            ]
          )
        }else{
          setWtchLoading(false);
          Alert.alert(
            "Mensaje Error",
            "Se ha producido un error al enviar el mensaje",
            [
              {
                style: "cancel",
                text: "Entendido",
                onPress: () => setIsVisible(false)
              }
            ]
          )
        }
      } catch (error) {
        setWtchLoading(false);
        Alert.alert(
          "Mensaje Error",
          "Se ha producido un error al enviar el mensaje",
          [
            {
              style: "cancel",
              text: "Entendido",
              onPress: () => setIsVisible(false)
            }
          ]
        )
      }
    }

  }
  return (  
    <Modal
      isVisible={isVisible}
      setIsVisible={setIsVisible}
    >
      <View style={styles.viewModalSendMessage}>
        <Avatar
          source={{uri: product.user?.photoURL}}
          size={80}

        />
        <Text style={styles.txtDisplayName}>
          Enviale un mensaje a {product.user?.displayName}
        </Text>
        <Input
          inputContainerStyle={styles.containerTextArea}
          placeholder="Escribe un mensaje"
          multiline={true}
          onChangeText={(text: string) => setMessage(text)}
          errorMessage={errors.empty}
        />
        <Button
          title="Enviar mensaje"
          containerStyle={styles.containerBtnSubmit}
          buttonStyle={styles.btnSubmit}
          onPress={handleSendMessage}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  viewModalSendMessage: {
    alignItems: "center"
  },
  txtDisplayName: {
    color: Colors.GREEN,
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 20
  },
  containerTextArea: {
    height: 120,
    padding: 0,
    margin: 0
  },
  containerBtnSubmit: {
    width: "95%"
  },
  btnSubmit: {
    backgroundColor: Colors.GREEN
  }
})
export default ModalSendMessage;
