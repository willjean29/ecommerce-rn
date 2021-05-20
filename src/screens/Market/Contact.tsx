import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Linking } from 'react-native';
import { Route, useNavigation } from '@react-navigation/native';
import { Avatar, Icon } from 'react-native-elements';
import { MessagesI } from 'context/messages/interfaces/messages.interface';
import { Collections, Colors } from 'utils/enums';
import { sendWhatsapp } from 'utils/utils';
import { addRegisterCollection } from 'utils/actions';
interface ContactParams {
  message: MessagesI
}
export interface ContactProps {
  route: Route<string,ContactParams>;
}
 
const Contact: React.FC<ContactProps> = ({route}) => {
  useEffect(() => {
    const changStatusMessage = async() => {
      const response = await addRegisterCollection(Collections.NOTIFICATIONS, message.uid, {viewed: 1})
    }
    changStatusMessage();
  }, [])
  const {message} =route.params;
  return (  
    <View style={styles.viewContact}>
      <View style={styles.viewContainerCard}>

        <View style={styles.viewInfoContact}>
          <View style={styles.viewInfoContactData}>
            <Avatar
              source={{uri: message.user?.photoURL}}
              rounded
              renderPlaceholderContent={<ActivityIndicator size="large" color={Colors.GREEN}/>}
              size={80}
            />
            <View style={styles.viewContactTxt}>
              <Text style={styles.txtDataSender}>
                {message.user?.displayName}
              </Text>
              <Text style={styles.txtDataSender}>
                {message.user?.email}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.txtTitleMessage}>
              Mensaje : 
            </Text>
            <Text style={styles.txtContendMessage}>
             {message.message}
            </Text>
          </View>
        </View>

        <View style={styles.viewIconsContact}>
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => sendWhatsapp(
              message.user?.phoneNumber as string,
              `Hola ${message.user?.displayName} te escribo de WhatsCommerce me dejaste un mensaje por el producto ${message.productTitle}`
            )}
          >
            <Icon
              type="material-community"
              name="whatsapp"
              color={Colors.GREENLIGHT}
              reverse
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => Linking.openURL(`tel:${message.user?.phoneNumber}`)}
          >
            <Icon
              type="material-community"
              name="phone-in-talk"
              color={Colors.GREENLIGHT}
              reverse
              size={30}
            />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContact: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    justifyContent: "center",
  },
  viewContainerCard: {
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: Colors.WHITE,
    elevation: 5
  },
  viewInfoContact: {
    borderRadius: 20,
    backgroundColor: Colors.GREEN,

  },
  viewInfoContactData: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  viewContactTxt: {
    flex: 1,
    marginLeft: 15,
  },
  txtDataSender: {
    color: Colors.WHITE,
    fontWeight: "bold",
    fontSize: 16
  },
  txtTitleMessage: {
    color: Colors.WHITE,
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 10
  },
  txtContendMessage: {
    color: Colors.WHITE,
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 30,
    marginVertical: 10
  },
  viewIconsContact: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
  }
})
 
export default Contact;