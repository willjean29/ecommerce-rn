import { UserStateI } from "context/user/interfaces/userState.interface";
import { RegisterDto } from "context/user/dtos/register.dto";
import { LoginDto } from "context/user/dtos/login.dto";
import firebase from 'database/firebase';

export interface UserContextI {
  userState: UserStateI;
  singIn: (user: LoginDto) => Promise<void>;
  singUp: (user: RegisterDto) => Promise<void>;
  validatioPhone: (setPhoneAuth: React.Dispatch<React.SetStateAction<boolean>>) => void;
  sendCode: (number:string, recaptcha: any) => Promise<string>;
  confirmCode: (verificationId: string, code: string) => Promise<boolean>;
  reloadUser: () => Promise<void>;
  registerPushNotification: () => Promise<string | undefined>;
  addCollectionData: (collection: string, doc: string, data: object) => Promise<void>;
  getCurrentUser: () => firebase.User
  uploadAvatar: (uri: string) => Promise<firebase.storage.UploadTaskSnapshot>;
  updatePhoto: () => Promise<void>;
  updateName: (name: string) => Promise<void>;
  updateEmail: (email: string) => Promise<void>;
  updatePhoneNumber: (number: string) => Promise<void>;
  reauthenticate: (verificationId: string, code: string) => Promise<boolean>;
  reauthenticateNumber: (verificationId: string, code: string) => Promise<boolean>;
  logout: () => Promise<void>;
}