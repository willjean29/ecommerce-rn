import { MessagesI } from "context/messages/interfaces/messages.interface";

export interface MessagesStateI {
  messages: MessagesI[] | null;
  isLoading : boolean;
  error : boolean | null;
}