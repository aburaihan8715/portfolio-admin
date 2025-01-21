export interface IUser {
  _id: string;
  name: string;
  email: string;
  profilePhoto?: string;
  password: string;
  passwordConfirm: string | undefined;
  passwordChangedAt?: Date;
  role: 'admin';
}
