import React, { useReducer } from 'react';
import MessagesContext from 'context/messages/messages.context';
import MessagesReducer from 'context/messages/messages.reducer';
import { MessagesStateI } from 'context/messages/interfaces/messagesState.interface';
import { loadMessagesAction } from 'context/messages/messages.actions';
export interface MessagesStateProps {
  children: React.ReactNode
}
 
const MessagesState: React.FC<MessagesStateProps> = ({children}) => {
  const messagesInitialState: MessagesStateI = {
    messages: null,
    isLoading: false,
    error: null
  } 
  const [messagesState, dispatch] = useReducer(MessagesReducer, messagesInitialState);
  const loadMessages = (receiver: string) => loadMessagesAction(receiver,dispatch);
  return (  
    <MessagesContext.Provider
      value={{
        messagesState,
        loadMessages,
        changeStatusMessages: () => {}
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}
 
export default MessagesState;
