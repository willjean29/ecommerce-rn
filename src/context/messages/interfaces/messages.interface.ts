import { UserI } from "context/user/interfaces/user.interface";
export interface DateI {
  nanoseconds: string;
  seconds: string
}

export interface MessagesI {
  uid: string;
  sender: string;
  receiver: string;
  productTitle: string;
  productUid: string;
  message: string;
  viewed: number;
  createdAt: Date | DateI;
  user?: UserI
}