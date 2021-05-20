import { MessagesStateI } from "context/messages/interfaces/messagesState.interface";
import { MessagesDispatchTypes } from "context/messages/messages.types";
import {
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_ERROR
} from 'context/messages/messages.types';

const MessagesReducer = (state: MessagesStateI, action: MessagesDispatchTypes) => {
  switch (action.type) {

  case LOAD_MESSAGES:
    return {
      ...state,
      isLoading: true
    }
  case LOAD_MESSAGES_SUCCESS:
    return {
      ...state,
      messages: action.payload,
      isLoading: false
    }
  case LOAD_MESSAGES_ERROR:
    return {
      ...state,
      error: true,
      isLoading: false
    }
  default:
    return state
  }
}

export default MessagesReducer;
