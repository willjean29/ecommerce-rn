import { UserI } from "context/user/interfaces/user.interface";
export interface ProductI {
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  category: number;
  createdBy: string;
  createdAt: Date;
  uid: string;
  user?: UserI
}