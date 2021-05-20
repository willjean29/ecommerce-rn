import { MessagesStateI } from "./messagesState.interface";

export interface MessagesContextI {
  messagesState: MessagesStateI;
  loadMessages: (received: string) => Promise<void>;
  changeStatusMessages: () => void;
}