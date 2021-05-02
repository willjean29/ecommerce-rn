export interface AddProductDto {
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  category: number;
  createdBy: string;
}