import { IUser } from './user.interface';

export interface IShop {
  _id: string;
  name: string;
  description: string;
  logo?: string;
  vendor: IUser;
  followers: IUser[];
  followersCount: number;
  isDeleted: boolean;
}
