import { UserI } from "context/user/interfaces/user.interface";

export interface UserStateI {
  user : UserI | null;
  isLoading : boolean;
  error : boolean | null;
}