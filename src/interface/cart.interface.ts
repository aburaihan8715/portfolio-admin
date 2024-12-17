import { IProduct } from './product.interface';
import { IUser } from './user.interface';

export interface ICartItem {
  product: string | IProduct;
  quantity: number;
}

export interface ICart {
  _id: string;
  user: string | IUser;
  items: ICartItem[];
  totalItems?: number;
  totalAmount?: number;
  isDeleted?: boolean;
}
