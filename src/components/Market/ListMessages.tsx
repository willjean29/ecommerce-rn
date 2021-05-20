import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Avatar } from 'react-native-elements';
import { DateI, MessagesI } from 'context/messages/interfaces/messages.interface';
import moment from 'moment';
import 'moment/locale/es';
import { Colors } from 'utils/enums';

export interface ListMessagesProps {
  messages: MessagesI[];
}
 
const ListMessages: React.FC<ListMessagesProps> = ({messages}) => {
  return (  
    <FlatList
      data={messages}
      renderItem={({item}) => (
        <ItemMessage
          message={item}
        />
      )}
      keyExtractor={(item, number) => item.uid}
    />
  );
}

interface ItemMessageProps {
  message: MessagesI
}

const ItemMessage: React.FC<ItemMessageProps> = ({message}) => {
  const time = message.createdAt as DateI;
  const timeSeconds = parseInt(time.seconds) * 1000;
  return (
    <View style={styles.viewItemMessage}>
      <Avatar
        source={{uri: message.user?.photoURL}}
        rounded
        size={60}
        renderPlaceholderContent={<ActivityIndicator size="large" color={Colors.GREEN}/>}
        containerStyle={styles.containerAvatar}
      />
      <View style={styles.viewInfoMessage}>
        <Text style={styles.txtInfoMessage}>
          {message.user?.displayName}
          <Text style={styles.txtContentMessage}>
            {` `}te ha enviado un mensaje para el producto{` `}
          </Text>
          <Text>
            {message.productTitle}
          </Text>
        </Text>
        <Text style={styles.txtDateMessage}>
          {moment(timeSeconds).format("L")} - {moment(timeSeconds).format("LT")}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewItemMessage: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    elevation: 5,
    borderRadius: 10
  },
  containerAvatar: {
    elevation: 5
  },
  viewInfoMessage: {
    flex: 1,
    marginLeft: 15
  },
  txtInfoMessage: {
    fontWeight: "bold"
  },
  txtContentMessage: {
    fontWeight: "normal"
  },
  txtDateMessage: {
    marginTop: 10,
    textAlign: "right",
    color: Colors.GRAY_OPACITY,
    fontWeight: "bold",
  }
})
 
export default ListMessages;
