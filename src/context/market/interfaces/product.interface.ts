export interface ProductI {
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  category: number;
  createdBy: string;
  createdAt: Date;
  uid: string
}