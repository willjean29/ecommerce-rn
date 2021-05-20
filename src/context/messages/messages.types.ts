import { MessagesI } from "context/messages/interfaces/messages.interface";

export const LOAD_MESSAGES = "LOAD_MESSAGES";
export const LOAD_MESSAGES_SUCCESS = "LOAD_MESSAGES_SUCCESS";
export const LOAD_MESSAGES_ERROR = "LOAD_MESSAGES_ERROR";

export interface LoadMessages {
  type: typeof LOAD_MESSAGES,
  payload: boolean
}

export interface LoadMessagesSucces {
  type: typeof LOAD_MESSAGES_SUCCESS,
  payload: MessagesI[];
}

export interface LoadMessagesError {
  type: typeof LOAD_MESSAGES_ERROR,
  payload: boolean
}

export type MessagesDispatchTypes = 
  | LoadMessages
  | LoadMessagesSucces
  | LoadMessagesError;