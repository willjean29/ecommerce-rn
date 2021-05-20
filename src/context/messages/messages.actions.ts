import {
  LOAD_MESSAGES,
  LOAD_MESSAGES_ERROR,
  LOAD_MESSAGES_SUCCESS,
  MessagesDispatchTypes
} from 'context/messages/messages.types';
import { UserI } from 'context/user/interfaces/user.interface';
import firebase from 'database/firebase';
import { Collections } from 'utils/enums';
import { MessagesI } from 'context/messages/interfaces/messages.interface';
export const loadMessagesAction = async(receiver: string, dispatch: React.Dispatch<MessagesDispatchTypes>) => {
  dispatch({
    type: LOAD_MESSAGES,
    payload: true
  })
  try {
    const messages = await getMessages(receiver);
    const messagesBySender = await getCreatedByMessages(messages);
    dispatch({
      type: LOAD_MESSAGES_SUCCESS,
      payload: messagesBySender
    })
  } catch (error) {
    dispatch({
      type: LOAD_MESSAGES_ERROR,
      payload: true
    })
  }
}

export const getCreatedByMessages = async(messages: MessagesI[]) => {
  const allMessages = [] as MessagesI[];
  await Promise.all(messages.map(async(message) => {
    const user = await firebase.db.collection(Collections.USERS).doc(message.sender).get();
    message.user = user.data() as UserI;
    allMessages.push(message);
  }))
  return allMessages;
}

export const getMessages = async(receiver: string) => {
  const messages = [] as MessagesI[];
  const response = await firebase.db.collection(Collections.NOTIFICATIONS).orderBy("createdAt","desc").get();
  response.forEach((item) => {
    if(item.data().receiver === receiver && item.data().viewed === 0){
      const message = item.data() as MessagesI;
      message.uid = item.id; 
      messages.push(message);
    }
  })
  return Promise.all(messages);
}