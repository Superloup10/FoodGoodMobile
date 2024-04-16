import { Category } from "./category.tsx";

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  image: string;
  category: Category;
}
