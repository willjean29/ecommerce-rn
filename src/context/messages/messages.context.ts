import {createContext} from 'react';
import { MessagesContextI } from 'context/messages/interfaces/messagesContext.interface';

const MessagesContext = createContext({} as MessagesContextI);

export default MessagesContext;