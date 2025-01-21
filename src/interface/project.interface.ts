export interface IProject {
  _id: string;
  name: string;
  type: string;
  coverImage?: string;
  overview: string;
  techStack: string;
  links: string;
  createdAt: Date;
}
