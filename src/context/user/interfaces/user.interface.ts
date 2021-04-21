export interface UserI {
  uid: string;
  displayName: string | null;
  email: string | null;
  token?: string;
  phoneNumber: string | null;
  photoURL: string | null;
  createdAt?: Date
}