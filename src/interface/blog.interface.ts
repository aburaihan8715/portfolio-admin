export interface IProject {
  _id: string;
  title: string;
  overview: string;
  coverImage?: string;
  content: string;
  category: string;
  createdAt: Date;
}
