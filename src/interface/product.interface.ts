import { ICategory } from './category.interface';
import { IShop } from './shop.interface';

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  category: ICategory;
  inventoryCount: number;
  quantity?: number;
  description: string;
  images?: string[];
  discount?: number;
  shop: IShop;
  isDeleted?: boolean;
}
