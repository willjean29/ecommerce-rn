import React, { useContext, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Image } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import SpinnerLoading from 'components/SpinnerLoading';
import ListMessages from 'components/Market/ListMessages';
import MessagesContext from 'context/messages/messages.context';
import UserContext from 'context/user/user.context';
import MessagesEmpty from 'assets/img/no_messages.png';
import { Colors } from 'utils/enums';
export interface MessageListProps {
  
}
 
const MessageList: React.FC<MessageListProps> = () => {
  const {userState} = useContext(UserContext);
  const {loadMessages, messagesState} = useContext(MessagesContext);
  useFocusEffect(
    useCallback(() => {
      loadMessages(userState.user?.uid as string);
    }, [])
  )
  if(!messagesState.messages){
    return (
      <View style={styles.viewLoading}>
        <SpinnerLoading/>
      </View>
    )
  }
  if(!messagesState.messages.length){
    return (
      <View style={styles.viewEmptyMessages}>
        <View style={styles.viewImgEmpty}>
          <Image
            source={MessagesEmpty}
            style={styles.imgEmptyMessage}
          />
          <Text
            style={styles.txtEmpty}
          >
            No tiene mensajes nuevos
          </Text>
        </View>
      </View>
    )
  }
  return (  
    <View style={styles.viewMessageList}>
      <ListMessages
        messages={messagesState.messages}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewLoading: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  viewEmptyMessages: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  viewImgEmpty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgEmptyMessage: {
    height: 250,
    width: 250
  },
  txtEmpty: {
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.GREEN
  },
  viewMessageList: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  }
})
 
export default MessageList;