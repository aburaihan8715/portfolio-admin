export interface IUser {
  _id: string;
  name: string;
  email: string;
  profilePhoto?: string;
  password: string;
  passwordConfirm: string | undefined;
  passwordChangedAt?: Date;
  role: 'superAdmin' | 'admin' | 'customer' | 'vendor';
  address?: string;
  phone?: string;
  isDeleted: boolean;
}
